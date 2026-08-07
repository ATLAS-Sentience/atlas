import { useState } from "react";
import CommitChart from "../components/CommitChart";
import "../styles/study.css";


function GithubPage(){


const [username,setUsername]=useState("");

const [profile,setProfile]=useState(null);

const [repos,setRepos]=useState([]);

const [commitData,setCommitData]=useState([]);

const [loading,setLoading]=useState(false);




async function analyzeGithub(){


if(!username)
return;


setLoading(true);



try{


// PROFILE DATA

const profileResponse = await fetch(

`https://api.github.com/users/${username}`

);


const profileData = await profileResponse.json();


setProfile(profileData);





// REPOSITORIES


const repoResponse = await fetch(

`https://api.github.com/users/${username}/repos`

);



const repoData = await repoResponse.json();


setRepos(repoData);





// COMMITS


let commits=[];



for(let repo of repoData.slice(0,5)){


const commitResponse = await fetch(

`https://api.github.com/repos/${username}/${repo.name}/commits`

);



const commitResult = await commitResponse.json();



if(Array.isArray(commitResult)){

commits.push(...commitResult);

}


}




const activity={};



commits.forEach(commit=>{


const date=

commit.commit.author.date.split("T")[0];



if(activity[date]){

activity[date]++;

}

else{

activity[date]=1;

}



});





setCommitData(

Object.entries(activity).map(

([day,count])=>({

day:day,

commits:count

})

)

);




}

catch(error){

console.log(error);

}



setLoading(false);


}





return(


<div>


<h1

style={{

color:"white",

textAlign:"center",

fontSize:"50px"

}}

>

💻 GitHub Analytics

</h1>




<p

style={{

color:"#94A3B8",

textAlign:"center",

fontSize:"20px"

}}

>

Analyze your GitHub productivity with Atlas

</p>







<div className="study-card">


<input

placeholder="Enter GitHub Username"

value={username}

onChange={(e)=>

setUsername(e.target.value)

}

/>



<button

onClick={analyzeGithub}

>

{

loading ?

"Analyzing..."

:

"Analyze GitHub"

}


</button>



</div>









{
profile &&


<div className="study-card">


<h2>

👤 Profile

</h2>



<h1>

{profile.name || profile.login}

</h1>


<p>

{profile.bio || "No bio available"}

</p>



<p>

📍 {profile.location || "Unknown"}

</p>




<div className="stats-container">



<div className="study-stat">


<h3>

Followers

</h3>


<h1>

{profile.followers}

</h1>


</div>






<div className="study-stat">


<h3>

Following

</h3>


<h1>

{profile.following}

</h1>


</div>






<div className="study-stat">


<h3>

Repositories

</h3>


<h1>

{profile.public_repos}

</h1>


</div>




</div>



</div>


}









{
repos.length>0 &&


<div className="study-card">


<h2>

📦 Repositories

</h2>




{

repos.map(repo=>(


<div

className="study-item"

key={repo.id}

>


<div>


<h3>

{repo.name}

</h3>


<p>

{repo.description || "No description"}

</p>


</div>




<div>


⭐ {repo.stars || repo.stargazers_count}


</div>


</div>



))


}



</div>


}










{
commitData.length>0 &&


<CommitChart

data={commitData}

/>

}



</div>


)


}



export default GithubPage;
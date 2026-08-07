import { useState } from "react";
import "../styles/settings.css";


function SettingsPage(){


const [username,setUsername]=useState(
    localStorage.getItem("username") || "Atlas User"
);


const [email,setEmail]=useState(
    localStorage.getItem("email") || "user@example.com"
);


const [darkMode,setDarkMode]=useState(true);

const [studyReminder,setStudyReminder]=useState(true);

const [taskAlert,setTaskAlert]=useState(true);





function saveProfile(){

    localStorage.setItem(
        "username",
        username
    );


    localStorage.setItem(
        "email",
        email
    );


    window.dispatchEvent(
        new Event("profileUpdated")
    );

}





return(

<div className="settings-container">


<h1>
⚙️ Settings
</h1>


<p className="settings-subtitle">
Customize your Atlas experience
</p>





<div className="settings-card">


<h2>
👤 Profile
</h2>




<div className="setting-item">

<p>
Username
</p>


<input

value={username}

onChange={(e)=>setUsername(e.target.value)}

/>

</div>





<div className="setting-item">

<p>
Email
</p>


<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

</div>




<button
onClick={saveProfile}
>

Save Profile

</button>



</div>









<div className="settings-card">


<h2>
🎨 Appearance
</h2>



<div className="setting-item">


<p>
Dark Mode
</p>



<button

onClick={()=>setDarkMode(!darkMode)}

>

{

darkMode

?

"Enabled"

:

"Disabled"

}

</button>


</div>



</div>









<div className="settings-card">


<h2>
🔔 Notifications
</h2>




<div className="setting-item">

<p>
Study Reminders
</p>


<button

onClick={()=>setStudyReminder(!studyReminder)}

>

{

studyReminder

?

"ON"

:

"OFF"

}

</button>


</div>





<div className="setting-item">

<p>
Task Alerts
</p>


<button

onClick={()=>setTaskAlert(!taskAlert)}

>

{

taskAlert

?

"ON"

:

"OFF"

}

</button>


</div>



</div>









<div className="settings-card">


<h2>
🗂 Data Management
</h2>



<button className="danger-btn">

Clear Local Data

</button>



</div>




</div>


)

}


export default SettingsPage;
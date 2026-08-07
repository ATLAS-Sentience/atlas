import { useState } from "react";
import "../styles/settings.css";


function SettingsPage(){


const [darkMode,setDarkMode]=useState(true);

const [notifications,setNotifications]=useState({

study:true,
tasks:true,
focus:true,
reports:false

});


const [focusTime,setFocusTime]=useState(25);


function toggleNotification(type){

setNotifications({

...notifications,

[type]:!notifications[type]

});

}



return(

<div>


<h1 className="settings-title">

⚙️ Settings

</h1>


<p className="settings-subtitle">

Customize your Atlas experience

</p>






<div className="settings-container">





<div className="settings-card">


<h2>
👤 Profile
</h2>


<input

placeholder="Name"

/>


<input

placeholder="Email"

/>


<textarea

placeholder="Bio"

/>



<button>

Save Profile

</button>


</div>







<div className="settings-card">


<h2>
🎨 Appearance
</h2>



<div className="setting-row">

<p>
Dark Mode
</p>


<button

onClick={()=>setDarkMode(!darkMode)}

>

{

darkMode

?

"ON"

:

"OFF"

}

</button>


</div>



<div className="setting-row">


<p>
Accent Color
</p>


<select>

<option>
Blue
</option>

<option>
Purple
</option>

<option>
Green
</option>


</select>


</div>



</div>








<div className="settings-card">


<h2>
🔔 Notifications
</h2>




<div className="setting-row">

<p>
Study Reminders
</p>


<input

type="checkbox"

checked={notifications.study}

onChange={()=>toggleNotification("study")}

/>


</div>





<div className="setting-row">

<p>
Task Reminders
</p>


<input

type="checkbox"

checked={notifications.tasks}

onChange={()=>toggleNotification("tasks")}

/>


</div>






<div className="setting-row">

<p>
Focus Alerts
</p>


<input

type="checkbox"

checked={notifications.focus}

onChange={()=>toggleNotification("focus")}

/>


</div>






<div className="setting-row">

<p>
Weekly Reports
</p>


<input

type="checkbox"

checked={notifications.reports}

onChange={()=>toggleNotification("reports")}

/>


</div>



</div>










<div className="settings-card">


<h2>
⚡ Productivity Preferences
</h2>



<label>

Default Focus Time

</label>



<input

type="number"

value={focusTime}

onChange={(e)=>
setFocusTime(e.target.value)
}

/>



<p>

Current:

{focusTime} minutes

</p>



</div>









<div className="settings-card">


<h2>
🔒 Security

</h2>


<button>

Change Password

</button>


<button>

Logout

</button>


</div>






</div>


</div>

)

}


export default SettingsPage;
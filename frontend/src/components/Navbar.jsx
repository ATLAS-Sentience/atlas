import { useEffect, useState } from "react";
import "../styles/navbar.css";

import { FiMenu } from "react-icons/fi";


function Navbar({ sidebarOpen, setSidebarOpen }){


const [username,setUsername]=useState(
    localStorage.getItem("username") || "User"
);



useEffect(()=>{


function updateUser(){

    setUsername(
        localStorage.getItem("username") || "User"
    );

}


window.addEventListener(
    "profileUpdated",
    updateUser
);


return()=>{

window.removeEventListener(
    "profileUpdated",
    updateUser
);

};


},[]);





return(

<nav className="navbar">


<button

className="menu-button"

onClick={()=>setSidebarOpen(!sidebarOpen)}

>

<FiMenu />

</button>




<h2 className="logo">

ATLAS

</h2>




<div className="user">

👤 {username}

</div>




</nav>


)

}


export default Navbar;
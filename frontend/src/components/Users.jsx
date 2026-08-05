import { useEffect, useState } from "react";
import { getUsers } from "../services/api";


function Users(){

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{

        async function fetchUsers(){

            try{

                const data = await getUsers();
                setUsers(data);

            }
            catch(error){

                console.error("Error fetching users:",error);

            }
            finally{

                setLoading(false);

            }

        }


        fetchUsers();

    },[]);



    if(loading){

        return(
            <h2 style={{color:"white"}}>
                Loading Users...
            </h2>
        )

    }



    return(

        <div
        style={{
            marginTop:"40px",
            background:"#1F2937",
            padding:"25px",
            borderRadius:"20px"
        }}
        >

            <h2
            style={{
                color:"white",
                marginBottom:"20px"
            }}
            >
                Users
            </h2>


            {
                users.map((user)=>(

                    <div
                    key={user.id}
                    style={{
                        color:"white",
                        padding:"15px",
                        borderBottom:"1px solid #374151"
                    }}
                    >

                        <h3>
                            {user.username}
                        </h3>

                        <p style={{color:"#9CA3AF"}}>
                            {user.email}
                        </p>

                    </div>

                ))
            }


        </div>

    );

}


export default Users;
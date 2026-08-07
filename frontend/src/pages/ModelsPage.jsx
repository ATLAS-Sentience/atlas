import { useEffect, useState } from "react";
import { getModels } from "../services/api";


function ModelsPage(){

    const [models,setModels] = useState([]);


    useEffect(()=>{

        async function fetchModels(){

            const data = await getModels();

            setModels(data);

        }

        fetchModels();

    },[]);



    return(

        <div>

            <h1
            style={{
                color:"white",
                textAlign:"center",
                fontSize:"50px"
            }}
            >
                AI Models
            </h1>



            <div
            style={{
                display:"flex",
                gap:"25px",
                flexWrap:"wrap",
                justifyContent:"center",
                marginTop:"40px"
            }}
            >


            {
                models.map((model)=>(

                    <div
                    key={model.id}
                    style={{
                        background:"#1F2937",
                        padding:"25px",
                        borderRadius:"20px",
                        width:"280px",
                        color:"white"
                    }}
                    >

                        <h2>
                            {model.name}
                        </h2>


                        <p
                        style={{
                            color:"#9CA3AF",
                            marginTop:"15px"
                        }}
                        >
                            Accuracy: {model.accuracy}%
                        </p>


                        <p
                        style={{
                            marginTop:"10px"
                        }}
                        >
                            Status: {model.status}
                        </p>


                    </div>

                ))
            }


            </div>


        </div>

    );

}


export default ModelsPage;
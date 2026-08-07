import { useState } from "react";
import "../styles/calendar.css";


function EventModal({closeModal, addEvent, date}){
    const [title,setTitle] = useState("");
    const [time,setTime] = useState("");
    const [category,setCategory] = useState("Study");


    function submit(){

        if(!title) return;

        addEvent({
            title,
            time,
            category
        });

        closeModal();

    }


    return(

        <div className="modal-bg">

            <div className="modal">


                <h2>
Add Event
</h2>

<p>
Date Selected: {date}
</p>


                <input
                placeholder="Event name"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />


                <input
                placeholder="Time"
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                />


                <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                >

                    <option>
                        Study
                    </option>

                    <option>
                        Work
                    </option>

                    <option>
                        Health
                    </option>

                    <option>
                        Personal
                    </option>

                </select>


                <button onClick={submit}>
                    Add Event
                </button>


                <button onClick={closeModal}>
                    Cancel
                </button>


            </div>


        </div>

    );

}


export default EventModal;
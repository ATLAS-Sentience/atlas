import CalendarView from "../components/CalendarView";


function CalendarPage(){

    return(

        <div>

            <h1
            style={{
                color:"white",
                textAlign:"center",
                fontSize:"50px"
            }}
            >
                AI Calendar
            </h1>


            <p
            style={{
                color:"#94A3B8",
                textAlign:"center",
                fontSize:"22px"
            }}
            >
                Manage your time with Atlas
            </p>



            <div
            style={{
                display:"flex",
                justifyContent:"center",
                marginTop:"40px"
            }}
            >

                <CalendarView />

            </div>


        </div>

    );

}


export default CalendarPage;
import { useState } from "react";
import FinanceChart from "../components/FinanceChart";
import "../styles/finance.css";
import ExpenseChart from "../components/ExpenseChart";
import { calculateFinance } from "../services/financeAPI";

function FinancePage() {

    const [salary, setSalary] = useState("");
    const [savings, setSavings] = useState("");
    const [expense, setExpense] = useState("");

    const [food, setFood] = useState("");
    const [rent, setRent] = useState("");
    const [travel, setTravel] = useState("");
    const [other, setOther] = useState("");

    const [goal, setGoal] = useState("");
    const [goalAmount, setGoalAmount] = useState("");
    const [goalSaved, setGoalSaved] = useState("");

    const [analyzed, setAnalyzed] = useState(false);
    const [financeData, setFinanceData] = useState(null);
const [loading, setLoading] = useState(false);


    const remaining = financeData?.remaining ?? 0;

const savingRate = financeData?.saving_rate ?? 0;

const expenseRatio = financeData?.expense_ratio ?? 0;

    // Financial Health Score
    const healthScore =
    savingRate >= 30
        ? 90
        : savingRate >= 20
        ? 75
        : savingRate >= 10
        ? 60
        : 40;

    // Savings prediction

    const yearlySavings =
        savings
        ? Number(savings) * 12
        : 0;


    const fiveYearSavings =
        yearlySavings * 5;



    // Goal progress

    const goalProgress =
        goalAmount && goalSaved
        ? ((Number(goalSaved)/Number(goalAmount))*100).toFixed(1)
        : 0;



    const chartData = {
        salary:Number(salary),
        savings:Number(savings),
        expense:Number(expense)
    };



    return (

    <div className="finance-page">


        <h1>
            💰 Finance Dashboard
        </h1>


        <p>
            Understand your financial health with Atlas
        </p>



        <div className="finance-input-card">


            <input
            type="number"
            placeholder="Monthly Salary"
            value={salary}
            onChange={(e)=>setSalary(e.target.value)}
            />


            <input
            type="number"
            placeholder="Total Savings"
            value={savings}
            onChange={(e)=>setSavings(e.target.value)}
            />


            <input
            type="number"
            placeholder="Monthly Expense"
            value={expense}
            onChange={(e)=>setExpense(e.target.value)}
            />



            <button
    onClick={async () => {

        if (!salary || !savings || !expense) {
            return;
        }

        try {
            setLoading(true);

            const data = await calculateFinance({
                salary: Number(salary),
                savings: Number(savings),
                expense: Number(expense),
                food: Number(food || 0),
                rent: Number(rent || 0),
                travel: Number(travel || 0),
                other: Number(other || 0)
            });

            setFinanceData(data);
            setAnalyzed(true);

        } catch (error) {
            console.error("Finance calculation failed:", error);
        } finally {
            setLoading(false);
        }

    }}
>
    {loading ? "Analyzing..." : "Analyze Finance"}
</button>

        </div>





        {
        analyzed &&

        <>


        <div className="finance-cards">


            <div className="finance-card">
                <h3>Saving Rate</h3>
                <h1 className="green">
                    {savingRate}%
                </h1>
            </div>



            <div className="finance-card">
                <h3>Expense Ratio</h3>
                <h1 className="red">
                    {expenseRatio}%
                </h1>
            </div>



            <div className="finance-card">
                <h3>Remaining Money</h3>
                <h1 className="blue">
                    ₹{remaining}
                </h1>
            </div>



            <div className="finance-card">

                <h3>
                    Financial Health
                </h3>

                <h1 className="green">
                    {healthScore}/100
                </h1>

            </div>


        </div>





        <FinanceChart data={chartData}/>






        <div className="finance-input-card">


            <h2>
                Expense Breakdown
            </h2>


            <input
            placeholder="Food Expense"
            value={food}
            onChange={(e)=>setFood(e.target.value)}
            />


            <input
            placeholder="Rent Expense"
            value={rent}
            onChange={(e)=>setRent(e.target.value)}
            />


            <input
            placeholder="Travel Expense"
            value={travel}
            onChange={(e)=>setTravel(e.target.value)}
            />


            <input
            placeholder="Other Expense"
            value={other}
            onChange={(e)=>setOther(e.target.value)}
            />

            <ExpenseChart

food={food}

rent={rent}

travel={travel}

other={other}

/>

        </div>






        <div className="finance-cards">


            <div className="finance-card">

                <h3>
                    1 Year Projection
                </h3>

                <h1 className="blue">
                    ₹{yearlySavings}
                </h1>

            </div>




            <div className="finance-card">

                <h3>
                    5 Year Projection
                </h3>

                <h1 className="green">
                    ₹{fiveYearSavings}
                </h1>

            </div>


        </div>







        <div className="finance-input-card">


            <h2>
                Savings Goal
            </h2>



            <input
            placeholder="Goal Name"
            value={goal}
            onChange={(e)=>setGoal(e.target.value)}
            />



            <input
            type="number"
            placeholder="Target Amount"
            value={goalAmount}
            onChange={(e)=>setGoalAmount(e.target.value)}
            />



            <input
            type="number"
            placeholder="Current Saved"
            value={goalSaved}
            onChange={(e)=>setGoalSaved(e.target.value)}
            />



            <h3>
                {goal}
            </h3>


            <div className="progress">

                <div
                className="progress-fill"
                style={{
                    width:`${goalProgress}%`
                }}
                >

                </div>

            </div>


            <p>
                {goalProgress}% completed
            </p>



        </div>


        </>

        }


    </div>

    );

}


export default FinancePage;
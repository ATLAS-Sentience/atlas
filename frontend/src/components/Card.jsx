import "../styles/card.css";

function Card({ title, value, color }) {

  return (

    <div className="card">

      <h4>
        {title}
      </h4>


      <h1 style={{ color: color }}>
        {value}
      </h1>


    </div>

  );

}

export default Card;
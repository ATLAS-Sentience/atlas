import "../styles/card.css";
function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: "#1F2937",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "220px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      <h4 style={{ color: "#9CA3AF" }}>{title}</h4>

      <h1
        style={{
          marginTop: "10px",
          color: color,
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default Card;
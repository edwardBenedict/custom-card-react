import "./Card.css";

function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="card" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn-container">
        <button>
          <a href="/">View More</a>
        </button>
      </div>
    </div>
  );
}

export default Card;

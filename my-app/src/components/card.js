const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.image} className="card-image" alt="swimmer"></img>
      <div className="card-stats">
        <span>{props.stats.rating} &nbsp;</span>
        <span className="gray">
          ({props.stats.reviewCount}) &#x2022; &nbsp;
        </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">from ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;

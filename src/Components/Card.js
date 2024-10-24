import { FaPhone, FaEnvelope } from "react-icons/fa";

const Card = (props) => {
  console.log(props);

  return (
    <div className="Card">
      <div className="card-header">
        <img src={props.imgURL} alt={props.name} />
      </div>
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>
          <FaEnvelope />
          {props.email}
        </p>
        <p>
          <FaPhone /> {props.phone}
        </p>
      </div>
    </div>
  );
};

export default Card;

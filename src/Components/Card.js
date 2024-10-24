// Importing specific icons (FaPhone, FaEnvelope) from the 'react-icons/fa' library.
import { FaPhone, FaEnvelope } from "react-icons/fa";

// Creating a functional component 'Card' that takes 'props' as an argument.
const Card = (props) => {
  // Logging the properties passed to this component to the console for debugging purposes.
  console.log(props);

  // Returning JSX to render the card component.
  return (
    // Parent div with a class 'Card' for styling purposes.
    <div className="Card">
      {/* A div representing the card header, containing an image. */}
      <div className="card-header">
        {/* Rendering an 'img' element with 'src' and 'alt' attributes based on the properties passed (imgURL and name). */}
        <img src={props.imgURL} alt={props.name} />
      </div>
      {/* A div representing the card body. */}
      <div className="card-body">
        {/* Displaying the name property in an 'h2' tag. */}
        <h2>{props.name}</h2>
        {/* Displaying the email property in a 'p' tag, along with an envelope icon. */}
        <p>
          <FaEnvelope />
          {props.email}
        </p>
        {/* Displaying the phone number in a 'p' tag, along with a phone icon. */}
        <p>
          <FaPhone /> {props.phone}
        </p>
      </div>
    </div>
  );
};

// Exporting the Card component as the default export so it can be used in other files.
export default Card;

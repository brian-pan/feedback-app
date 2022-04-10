import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
import Card from "./shared/Card";

const FeedbackCard = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  // const handleClick = () => {
  //   console.log("button clicked");
  // };
  // -> if no value like id, then no need use arrow func.

  return (
    <Card>
      <div className="card--num">{feedback.rating}</div>

      {/* <button
        className="close card--close"
        onClick={handleClick}
      > */}
      <button
        className="edit card--edit"
        onClick={() => editFeedback(feedback)}
      >
        <FaEdit color="purple" />
      </button>
      <button
        className="close card--close"
        onClick={() => deleteFeedback(feedback.id)}
      >
        <FaTimes color="purple" />
      </button>

      <div className="card--text">{feedback.text}</div>
      {/* <button onClick={handleClick}>rating+1</button> */}
    </Card>
  );
};

FeedbackCard.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackCard;

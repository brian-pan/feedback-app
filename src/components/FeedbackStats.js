import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);
  //calculate avg rating:
  let avgRating =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;
  avgRating = avgRating.toFixed(1);

  return (
    <div className="cards--stats">
      <h4>Reviews: {feedbacks.length}</h4>
      <h4>Average Rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  );
}

export default FeedbackStats;

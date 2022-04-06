import PropTypes from "prop-types";

function FeedbackStats({ feedbacks }) {
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

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array,
};

export default FeedbackStats;

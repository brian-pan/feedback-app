import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackCard from "./FeedbackCard";

const FeedbackCards = ({ feedbacks, handleDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedback yet!</p>;
  }

  return (
    <div className="cards">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackCard
              key={feedback.id}
              feedback={feedback}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    //NO motion version:
    // <div className="cards">
    //   {feedbacks.map((feedback) => (
    //     <FeedbackCard
    //       key={feedback.id}
    //       feedback={feedback}
    //       handleDelete={handleDelete}
    //     />
    //   ))}
    // </div>
  );
};

FeedbackCards.propTypes = {
  feedbacks: PropTypes.array,
  // can also write:
  // feedbacks: PropTypes.arrayOf({
  //   id: PropTypes.number.isRequired,
  //   text: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  // }),
};

export default FeedbackCards;

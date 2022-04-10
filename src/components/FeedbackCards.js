import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import FeedbackCard from "./FeedbackCard";
import Spinner from "./shared/Spinner";

const FeedbackCards = () => {
  const { feedbacks, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <p>No feedback yet!</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="cards">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackCard key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

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
};

export default FeedbackCards;

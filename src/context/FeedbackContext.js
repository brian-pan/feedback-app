import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 5,
    },
  ]);

  const [feedbacksEdit, setFeedbacksEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); // add an id to feedback
    // console.log(newFeedback);
    setFeedbacks([newFeedback, ...feedbacks]); // add new feedback to original feedbacks
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  //set item to be updated
  const editFeedback = (item) => {
    // console.log("edit");
    console.log(item);
    setFeedbacksEdit({
      item,
      edit: true,
    });
    console.log(item);
  };

  //Update feedback
  const updateFeedback = (id, updItem) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updItem } : feedback
      )
    );
    setFeedbacksEdit({
      item: feedback,
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbacksEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

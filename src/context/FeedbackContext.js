import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbacksEdit, setFeedbacksEdit] = useState({
    item: {},
    edit: false,
  });

  //first load
  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback from backend (page load)
  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedbacks(data);
    setIsLoading(false);
  };

  //add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbacks([data, ...feedbacks]);
  };

  // //add feedback (frontend-only version)
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4(); // add an id to feedback
  //   // console.log(newFeedback);
  //   setFeedbacks([newFeedback, ...feedbacks]); // add new feedback to original feedbacks
  // };

  //delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });

      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  // //delete feedback (frontend-only version)
  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedbacks(feedbacks.filter((item) => item.id !== id));
  //   }
  // };

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
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, ...data } : feedback
      )
    );
    editFeedback();
  };

  // //Update feedback (frontend-only version)
  // const updateFeedback = (id, updItem) => {
  //   setFeedbacks(
  //     feedbacks.map((feedback) =>
  //       feedback.id === id ? { ...feedback, ...updItem } : feedback
  //     )
  //   );
  //   editFeedback();
  // };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbacksEdit,
        isLoading,
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

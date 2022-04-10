import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [rating, setRating] = useState(3);
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbacksEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbacksEdit.edit === true) {
      setIsDisabled(false);
      setText(feedbacksEdit.item.text);
      setRating(feedbacksEdit.item.rating);
    }
  }, [feedbacksEdit]);

  const handleChange = (event) => {
    // want the validations run while typing
    if (event.target.value === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (event.target.value.trim().length < 10) {
      setIsDisabled(true);
      setMessage("Review must contain at least 10 characters.");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbacksEdit.edit === true) {
        updateFeedback(feedbacksEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate the service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={isDisabled}>
            Submit
          </Button>
          {message && <div className="message">{message}</div>}
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

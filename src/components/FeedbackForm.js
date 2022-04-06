import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How would you rate the service?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" version="secondary">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

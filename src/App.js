import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackCards from "./components/FeedbackCards";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

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

  return (
    //in order to use Router, surround the whole thing
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackCards
                  feedbacks={feedbacks}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />

          {/* <Route path="/about">This is the about route</Route> */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;

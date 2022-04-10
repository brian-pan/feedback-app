import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header";

import FeedbackCards from "./components/FeedbackCards";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackCards />
                  <AboutIconLink />
                </>
              }
            />

            {/* <Route path="/about">This is the about route</Route> */}
            <Route
              path="/about"
              element={
                <>
                  <AboutPage />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

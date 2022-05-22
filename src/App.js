import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="home"
                pageSize={9}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={9}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={9}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={9}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={9}
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={9}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={9}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

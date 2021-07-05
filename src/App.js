import React, { useState } from "react";
import "./App.css";
import data from "./data";

const App = () => {
  const [visible, setVisible] = useState(3);
  const [questions, setQuestions] = useState(data);
  const showMoreItems = () => {
    setVisible((prev) => {
      return prev + 3;
    });
  };

  return (
    <div className="App">
      <div className="container">
        {questions.slice(0, visible).map((question) => {
          return (
            <div className="nagap">
              <div className="id">{question.id}</div>
              <div className="q-body">{question.body}</div>
            </div>
          );
        })}
        <button onClick={showMoreItems}>Load More</button>
        <br />
      </div>
    </div>
  );
};

export default App;

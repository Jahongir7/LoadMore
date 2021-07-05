import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        {items.map((item) => {
          <div className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default App;

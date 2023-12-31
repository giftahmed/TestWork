import React from "react";
import { useState } from "react";
import data from "../assets/db/data.json";

// Create a functional component called `Screen`.
const Screen = () => {
  const [db] = useState(data);
  const scores = db.map((el) => el.score);
  // Calculate the average score by adding up all the scores and dividing by the number of scores.
  const average = Math.trunc(scores.reduce((acc, cur) => acc + cur, 0) / scores.length);

  // Return JSX elements to display the Screen content.
  return (
    <div className="Screen">
    
      <section className="result">
        <h2 className="title-result">Your Result</h2>
        <div className="circle">
          <h2 className="numeric-score">{average}</h2>
          <p className="max-score">of 100</p>
        </div>
        <h2 className="score">Great</h2>
        <p className="score-comment">
          You scored higher than 65% of the people who have taken these tests
        </p>
      </section>

      
      <section className="summary">
        <h2 className="title-summary">Summary</h2>
        <div className="container-summary">
         
          {db.map((el, index) => (
            <div key={index} className="category">
              <div className="icon-text">
                <img src={el.icon} alt={el.category} />
                
                <span className={el.category}>{el.category}</span>
              </div>
              <div className="value">
                <span className="bold">{el.score}</span>
                <span className="normal"> / 100</span>
              </div>
            </div>
          ))}
        </div>
       
        <button className="btn-summary">Continue</button>
      </section>
    </div>
  );
};


export default Screen;

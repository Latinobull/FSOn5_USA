import { useState } from 'react';
export default function Feedback() {
  const [feedback, setFeedback] = useState({ Good: 0, Neutral: 0, Bad: 0 });
  function countTotalFeedback() {
    return feedback.Good + feedback.Neutral + feedback.Bad;
  }
  function countPositiveFeedbackPercentage() {}
  function handleChange(event) {
    setFeedback(prev => {
      return {
        ...prev,
        [event.target.textContent]: prev[event.target.textContent] + 1,
      };
    });
  }
  console.log(feedback);
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button onClick={handleChange}>Good</button>
      <button onClick={handleChange}>Neutral</button>
      <button onClick={handleChange}>Bad</button>
      {countTotalFeedback() > 0 ? (
        <div>
          <h3>Good: {feedback.Good}</h3>
          <h3>Neutral: {feedback.Neutral}</h3>
          <h3>Bad: {feedback.Bad}</h3>
          <h3>Total: {countTotalFeedback()}</h3>
        </div>
      ) : (
        <h3>No Feedback</h3>
      )}
    </div>
  );
}

import { useSelector, useDispatch } from 'react-redux';
import {
  answerQuestion,
  endQuiz,
  grabQuestion,
  resetQuiz,
} from '../redux/reducer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
export default function Quiz() {
  const allQuestions = useSelector(state => state.quizData);
  const currentQuestion = useSelector(state => state.currentQuestion);
  const score = useSelector(state => state.score);
  const index = useSelector(state => state.index);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(resetQuiz());
  }, []);

  useEffect(() => {
    //* Create the logic and store in a variable
    setLoading(true);
    const handleTimeout = () => {
      if (index === allQuestions.length) {
        navigate('/quiz/end');
      } else {
        dispatch(grabQuestion());
      }
      setLoading(false);
    };
    //* Create the setTimeout and store that also in a variable
    const timeout = setTimeout(handleTimeout, 200);
    //* once the effect is done, remove the setTimeout
    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  function handleClick(e) {
    dispatch(answerQuestion(e.target.textContent));
  }
  return (
    <main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0px 20px',
        }}
      >
        <h1>Quiz</h1>
        <h3>Score: {score}</h3>
      </div>

      {currentQuestion && (
        <div style={{ textAlign: 'center' }}>
          <h4>{currentQuestion.question}?</h4>
          <button onClick={handleClick}>{currentQuestion.choices[0]}</button>
          <button onClick={handleClick}>{currentQuestion.choices[1]}</button>
          <button onClick={handleClick}>{currentQuestion.choices[2]}</button>
          <button onClick={handleClick}>{currentQuestion.choices[3]}</button>
        </div>
      )}
      {loading && <Loading />}
    </main>
  );
}

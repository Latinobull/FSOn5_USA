import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { postHighscores } from '../redux/operator';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
export default function GameOver() {
  const score = useSelector(state => state.score);
  const loading = useSelector(state => state.highscores.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postHighscores({ score, name })).then(() => {
      navigate('/highscores')
    });
  }
  return (
    <main style={{ textAlign: 'center' }}>
      <h2>Game Over</h2>
      <h4>Your final score was {score}</h4>
      <h5>Please enter your name below</h5>
      {loading && <Loading />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

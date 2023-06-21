import { useSelector } from 'react-redux';

export default function GameOver() {
  const score = useSelector(state => state.score);
  return (
    <main style={{ textAlign: 'center' }}>
      <h2>Game Over</h2>
      <h4>Your final score was {score}</h4>
      <h5>Please enter your name below</h5>
      <form>
        <input type="text" name="name" id="name" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

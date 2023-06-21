import { useNavigate } from 'react-router-dom';
export default function Landing() {

  const navigation = useNavigate();
  return (
    <main>
      <div className="card">
        <h4>Welcome to my quiz!</h4>
        <h4>Please click below to start the quiz</h4>
        <button onClick={() => navigation('/quiz')}>Start Quiz</button>
      </div>
    </main>
  );
}

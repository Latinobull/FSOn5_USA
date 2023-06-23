import { useDispatch, useSelector } from 'react-redux';
import { getHighscores } from '../redux/operator';
import { useEffect } from 'react';
import Loading from '../components/Loading';
export default function Highscores() {
  const dispatch = useDispatch();
  const allScores = useSelector(state => state.highscores.allScores);
  const loading = useSelector(state => state.highscores.loading);

  let newAllScores = [...allScores].sort((a, b) => b.score - a.score);

  console.log(newAllScores);
  useEffect(() => {
    dispatch(getHighscores());
  }, []);
  return (
    <main>
      <h1>Highscores</h1>
      {loading && <Loading />}
      {allScores.length > 0 &&
        newAllScores.map(item => (
          <li key={item.id}>
            {item.name}: {item.score}
          </li>
        ))}
    </main>
  );
}

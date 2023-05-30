import './App.css';
import Landing from './component/Landing';
import MovieApp from './pages/MovieApp';
import NoRouting from './pages/NoRouting';
import WithRouting from './pages/WithRouting';

function App() {
  return (
    <div className="App">
      {/* <NoRouting /> */}
      <WithRouting />
      {/* https://www.strandbooks.com/events */}
      {/* <MovieApp /> */}
    </div>
  );
}

export default App;

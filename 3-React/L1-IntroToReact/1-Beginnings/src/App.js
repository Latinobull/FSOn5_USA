import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
function App() {
  const name = 'Juanita';
  const list = [
    { color: 'red', title: 'First' },
    { color: 'blue', title: 'About' },
    { color: 'green', title: 'Contact' },
  ];
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  return (
    <div className="App">
      {/* <Header color="red" title="First" />
      <Header color="blue" title="About" />
      <Header color="green" title="Contact" /> */}
      {list.map(item => (
        <Header color={item.color} title={item.title} />
      ))}
    </div>
  );
}

export default App;

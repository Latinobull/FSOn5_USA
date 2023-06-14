import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slice';
export default function MovieForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSearch(input));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

import { useState } from 'react';

export default function MovieForm({ setSearch }) {
  const [input, setInput] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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

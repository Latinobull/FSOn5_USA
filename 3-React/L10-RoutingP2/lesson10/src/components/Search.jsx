import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
export default function Search() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search for last Name</label>
        <input type="text" onChange={() => console.log} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

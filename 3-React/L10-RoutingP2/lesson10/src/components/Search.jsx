import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lastname = searchParams.get('lastname') || '';
  const nav = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    console.log('hey');
    nav(`/search/people?lastname=${lastname}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search for last Name</label>
        <input
          type="text"
          onChange={e => setSearchParams({ lastname: e.target.value })}
          value={lastname}
        />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </>
  );
}

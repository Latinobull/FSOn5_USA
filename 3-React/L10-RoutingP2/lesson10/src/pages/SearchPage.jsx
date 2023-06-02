import { Routes, Route, Link } from 'react-router-dom';
import Search from '../components/Search';
import People from '../components/People';
import AdminLanding from '../components/AdminLanding';
export default function SearchPage() {
  return (
    <div>
      <Link to={'/'}>Admin Page</Link>
      <Routes>
        <Route path="/" element={<AdminLanding />} />
        <Route path="/search" element={<Search />}>
          <Route path="people" element={<People />} />
        </Route>
      </Routes>
    </div>
  );
}

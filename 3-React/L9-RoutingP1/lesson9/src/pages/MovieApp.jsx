import { Route, Routes } from 'react-router-dom';
import Landing from '../component/Landing';
import SingleMovie from '../component/SingleMovie';
import NotFound from '../component/NotFound';
export default function MovieApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/single/:movieID" element={<SingleMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

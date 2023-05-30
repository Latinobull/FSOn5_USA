import { useState } from 'react';
import Header from '../component/Header';
import Home from '../component/Home';
import Footer from '../component/Footer';
export default function NoRouting() {
  const [page, setPage] = useState(<Home />);
  return (
    <div>
      <Header setPage={setPage} />
      {page}
      <Footer />
    </div>
  );
}

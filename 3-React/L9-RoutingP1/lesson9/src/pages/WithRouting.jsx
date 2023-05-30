import SecondHeader from '../component/SecondHeader';
import Footer from '../component/Footer';
import Home from '../component/Home';
import About from '../component/About';
import Contact from '../component/Contact';
import Resume from '../component/Resume';
import NotFound from '../component/NotFound';
export default function WithRouting() {
  return (
    <div>
      <SecondHeader />
      <Home />
      <Footer />
    </div>
  );
}

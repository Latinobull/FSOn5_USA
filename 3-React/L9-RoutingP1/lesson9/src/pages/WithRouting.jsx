import SecondHeader from '../component/SecondHeader';
import Footer from '../component/Footer';
import Home from '../component/Home';
import About from '../component/About';
import Contact from '../component/Contact';
import Resume from '../component/Resume';
import NotFound from '../component/NotFound';
import { Routes as RouterContainer, Route } from 'react-router-dom';
export default function WithRouting() {
  return (
    <div>
      <SecondHeader />
      <RouterContainer>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </RouterContainer>
      <Footer />
    </div>
  );
}

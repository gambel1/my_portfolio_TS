import About from './About/About';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';
import { useRef } from 'react';

export default function App() {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const title = 'CONTACTS';

  return (
    <>
      <Header click={handleClick} />

      <main>
        <Home />
        <About />
        <Portfolio />
        <Contacts title={title} />
      </main>
      <Footer />
    </>
  );
}

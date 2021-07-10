import './assets/css/main.css';

import { useEffect } from 'react';
import bundle from './assets/ts/bundle';

import NavigationBar from './components/page-components/NavigationBar';
import Anchor from './components/page-components/Anchor';
import Header from './components/page-components/Header';
import Services from './components/page-components/Services';
import Portfolio from './components/page-components/Portfolio';
import AboutMe from './components/page-components/AboutMe';
import Contact from './components/page-components/Contact';

import ToTop from './components/page-components/ToTop';

function App() {
  useEffect(bundle);

  return (
    <>
      <NavigationBar />
      <Anchor name="home" />
      <Header />
      <Anchor name="services" />
      <Services />
      <Anchor name="portfolio" />
      <Portfolio />
      <Anchor name="about-me" />
      <AboutMe />
      <Anchor name="contact" />
      <Contact />

      <ToTop />
    </>
  );
}

export default App;
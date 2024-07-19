                     // import About from './components/About';
import React, { useRef } from 'react';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';


import NavBar from './NavBar';
import './App.css';
// import photo from './assetes/bb.jpg'
import SlideBar from './components/SlideBar';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };


  return (
          <div className="App" >
            {/* style={{         backgroundImage: `url(${photo})`, 
          backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} */}

<NavBar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }} />
<div className='components'>

         <div ref={homeRef}><Home /></div>
        {/* <div ref={aboutRef}><About /></div> */}
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={contactRef}><Contact /></div>
    </div> 
    <SlideBar />
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/header/header'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Landing from './components/landing/landing'


function App() {
  return (
    <>
    <header>
        <Header />
    </header>
    <main className='App'>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
    </>
  );
}

export default App;

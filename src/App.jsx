import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Spider from './components/Spider'; // Import the new Spider component
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Training from './components/Training';
// import Education from './components/Education';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-primary-light to-primary-light/80 dark:from-primary-dark dark:to-primary-dark/90">
        <Navbar />
        <Hero />
        <Skills />
        <div className="flex">
        <Spider /> {/* Add the Spider component here */}
        </div>
        <Projects />
        <Experience />
        <Training />
        {/* <Education /> */}
        <Certificates />
        <Contact/>
      </div>
    </ThemeProvider>
  )
}

export default App;
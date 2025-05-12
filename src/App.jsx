import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
      </div>
    </ThemeProvider>
  )
}

export default App;



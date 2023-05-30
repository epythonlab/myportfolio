// import logo from './logo.svg';
import './App.css';
// import all components here
import Navbar from './components/navbar'
import About from './components/about'
import Academic from './components/academic'
import Experience from './components/experience'
import Skills from './components/skill'
import Footer from './components/footer'
function App() {

  // render the navidation here
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Academic />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;

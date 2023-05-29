import logo from './logo.svg';
import './App.css';
// import all components here
import Navbar from './components/navbar'
import About from './components/about'
import Academic from './components/academic'

function App() {

  // render the navidation here
  return (
   <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Academic />
   </main>
  );
}

export default App;

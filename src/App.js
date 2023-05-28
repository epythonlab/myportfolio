import logo from './logo.svg';
import './App.css';
// import all components here
import Navbar from './components/navbar'
import About from './components/about'

function App() {

  // render the navidation here
  return (
   <main className="text-gray-400 bg-gray-600 body-font">
      <Navbar />
      <About />
   </main>
  );
}

export default App;

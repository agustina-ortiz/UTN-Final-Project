import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Awards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

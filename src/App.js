import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import MyStudy from './components/MyStudy';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <MyStudy />
      <Contact />
    </div>
  );
}

export default App;

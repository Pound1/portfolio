import './App.css';
import Contact from './sections/Content/Contact';
import Gallery from './sections/Content/Gallery';
import Projects from './sections/Content/Projects';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="/projects" Component={Projects}/>
          <Route path="/gallery" Component={Gallery}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </div>
      <Footer />
    </div>
          </Router>

  );
}

export default App;

import './App.css';
import Contact from './sections/Content/Contact';
import Gallery from './sections/Content/Gallery';
// import Projects from './sections/Content/Projects';
import History from './sections/Content/History';
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
          <Route exact path="/"  Component={Home}/>
          <Route path="/history" Component={History}/>
          <Route path="/gallery" Component={Gallery}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </div>
    </div>
          </Router>

  );
}

export default App;

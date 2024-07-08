
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route,Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Header from './components/Header';
import Home from './routes/Home';
import Project from './routes/Project';
import Service from './routes/Service';
import Skills from './routes/Skills';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Service" element={<Service/>}/>
        <Route exact path="/Project" element={<Project/>}/>
        <Route exact path="/Skills" element={<Skills/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

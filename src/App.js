//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  NavbarTop,
  Home
} from './components';



function App() {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" /*element={<AboutMe />}*/ />
        <Route path="/myWork" /*element={<MyWork />}*/ />
        <Route path="/contact" /*element={<Contact />}*/ />
      </Routes>
    </Router>
  )
}

export default App;

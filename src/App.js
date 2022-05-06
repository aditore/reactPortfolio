//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  NavbarTop,
  Home,
  Header,
  Footer
} from './components';



function App() {
  return (
    <Router>
      <NavbarTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" /*element={<AboutMe />}*/ />
        <Route path="/myWork" /*element={<MyWork />}*/ />
        <Route path="/contact" /*element={<Contact />}*/ />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

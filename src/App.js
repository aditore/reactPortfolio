//import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {
  NavbarTop,
  Home,
  Header,
  Footer,
  AboutMePage,
  MyWork,
  ContactForm,
  ResumePage
} from './components';



function App() {
  return (
    <Router>
      <NavbarTop />
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
        <Route path="/myWork" element={<MyWork />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App;

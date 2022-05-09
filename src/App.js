//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Route path="/reactPortfolio/" element={<Home />} />
        <Route path="/reactPortfolio/aboutMe" element={<AboutMePage />} />
        <Route path="/reactPortfolio/myWork" element={<MyWork />} />
        <Route path="/reactPortfolio/contact" element={<ContactForm />} />
        <Route path="/reactPortfolio/resume" element={<ResumePage />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App;

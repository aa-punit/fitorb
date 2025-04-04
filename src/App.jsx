import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Plans from "./pages/Plans.jsx";
import HealthTips from "./pages/HealthTips.jsx";
import './index.css'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/health-tips" element={<HealthTips />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
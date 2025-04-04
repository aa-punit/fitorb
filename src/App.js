import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
// ...existing imports...

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Previous routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/health-tips" element={<HealthTips />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

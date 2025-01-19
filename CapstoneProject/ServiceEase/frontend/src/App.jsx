import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Region from './pages/Region';  // Add the Region component import
import ServicesList from '../frontend/src/ServicesList'; // Import the ServicesList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/region/:regionName" element={<Region />} /> {/* Add Route for Region page */}
        <Route path="/services" element={<ServicesList />} /> {/* Add Route for ServicesList page */}
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for redirection
import './Home.css'; 
import coverImage from "../assets/homepage-cover-photo.jpg";
import cleaning from "../assets/cleaners-homepage.jpg";
import pestControl from "../assets/pest-control-homepage.jpg";
import gardening from "../assets/gardening-homepage.jpg";
import painting from "../assets/painting-homepage.jpg";
import renovation from "../assets/renovation-homepage.jpg"; 
import plumbing from "../assets/plumbing-homepage.jpg";
import nails from "../assets/nails-homepage.jpg"; 
import womensSalon from "../assets/womens-salon-services-homepage.jpg"; 
import mensSalon from "../assets/mens-salon-services-homepage.jpg"; 
import carpentry from "../assets/carpentry-homepage.jpg";
import logo from "../assets/service-ease-logo.jpg";
import { useLocation } from 'react-router-dom';

const Home = () => {
  // Get the email from location state or localStorage (if page reload occurs)
  const location = useLocation();
  const userEmail = location?.state?.userEmail || localStorage.getItem('userEmail');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const validRegions = ['Auckland', 'Wellington', 'New Plymouth', 'Christchurch'];

    // Check if the address contains a valid region
    const region = validRegions.find((region) => address.toLowerCase().includes(region.toLowerCase()));
    
    if (region) {
      navigate(`/region/${region}`, { state: { region } });
    } else {
      alert("Sorry, We do not service in your area yet.");
    }
  };

  const coverImageStyle = {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    width: '100%',
    objectFit: 'cover',
  };

  const inputStyle = {
    padding: "10px",
    width: "300px",
    margin: "10px 0",
    border: "2px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const serviceContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
    justifyItems: "center",
    margin: "30px 0",
    padding: "0 20px", 
  };

  const serviceCardStyle = {
    textAlign: "center",
    border: "2px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    width: "100%",
    maxWidth: "200px",
  };

  const serviceImageStyle = {
    width: "100%",
    borderRadius: "5px",
  };

  const footerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    marginTop: "30px",
  };

  return (
    <div className="main-content" style={{ width: "100%", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
      {/* Header Section */}
      <header style={{ textAlign: "center", padding: "20px" }}>
        <img src={logo} alt="ServiceEase Logo" style={{ height: "100px", marginBottom: "10px" }} />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", padding: "10px", marginRight: "20px" }}>
          <Link to="/login">
            <button style={buttonStyle}>Login</button>
          </Link>
          <Link to="/signup">
            <button style={buttonStyle}>Sign Up</button>
          </Link>
        </div>
      </header>

      {/* Welcome Section */}
      {userEmail ? (
        <h2>Welcome, {userEmail}!</h2>
      ) : (
        <h2>Welcome to ServiceEase!</h2>
      )}

      {/* Hero Section with Background Image */}
      <section style={{ textAlign: "center", position: "relative" }}>
        <div style={coverImageStyle}></div>
        <div style={{ padding: "20px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <form onSubmit={handleAddressSubmit}>
            <input
              type="text"
              placeholder="Enter Address (Auckland, Wellington, New Plymouth, Christchurch)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Find Services</button>
          </form>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
          <button style={buttonStyle}>Auckland</button>
          <button style={buttonStyle}>Wellington</button>
          <button style={buttonStyle}>New Plymouth</button>
          <button style={buttonStyle}>Christchurch</button>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Services We Offer</h2>
        <div style={serviceContainerStyle}>
          <div style={serviceCardStyle}>
            <img src={cleaning} alt="Cleaning" style={serviceImageStyle} />
            <p>Cleaning</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={pestControl} alt="Pest Control" style={serviceImageStyle} />
            <p>Pest Control</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={gardening} alt="Gardening" style={serviceImageStyle} />
            <p>Gardening</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={painting} alt="Painting" style={serviceImageStyle} />
            <p>Painting</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={renovation} alt="Renovation" style={serviceImageStyle} />
            <p>Renovation</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={plumbing} alt="Plumbing" style={serviceImageStyle} />
            <p>Plumbing</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={nails} alt="Nails" style={serviceImageStyle} />
            <p>Nails</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={womensSalon} alt="Women's Salon Services" style={serviceImageStyle} />
            <p>Women's Salon</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={mensSalon} alt="Men's Salon Services" style={serviceImageStyle} />
            <p>Men's Salon</p>
          </div>
          <div style={serviceCardStyle}>
            <img src={carpentry} alt="Carpentry" style={serviceImageStyle} />
            <p>Carpentry</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>Download our App</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button style={buttonStyle}>Google Play</button>
          <button style={buttonStyle}>Apple App Store</button>
        </div>
        <p style={{ fontSize: "12px", color: "#666" }}>© 2025 ServiceEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/service-ease-logo.jpg";
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

const Region = () => {
  const { state } = useLocation();
  const region = state?.region;

  const [services, setServices] = useState([]);

  // Function to get a random set of services based on the region
  const getRandomServices = (region) => {
    const allServices = [
      { name: "Cleaning", img: cleaning },
      { name: "Pest Control", img: pestControl },
      { name: "Gardening", img: gardening },
      { name: "Painting", img: painting },
      { name: "Renovation", img: renovation },
      { name: "Plumbing", img: plumbing },
      { name: "Nails", img: nails },
      { name: "Women's Salon", img: womensSalon },
      { name: "Men's Salon", img: mensSalon },
      { name: "Carpentry", img: carpentry }
    ];

    // For now, we pick random services for demonstration
    const randomServices = allServices.sort(() => 0.5 - Math.random()).slice(0, 4);
    setServices(randomServices);
  };

  // Update services when region is selected
  useEffect(() => {
    if (region) {
      getRandomServices(region);
    }
  }, [region]);

  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
      <header style={{ textAlign: "center", padding: "20px" }}>
        <img src={logo} alt="ServiceEase Logo" style={{ height: "100px", marginBottom: "10px" }} />
        <h1>Services in {region}</h1>
      </header>

      {/* Services Section */}
      <section style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Services Available in {region}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", justifyItems: "center" }}>
          {services.map((service, index) => (
            <div key={index} style={{ textAlign: "center", border: "2px solid #ddd", borderRadius: "5px", padding: "10px", maxWidth: "200px", width: "100%" }}>
              <img src={service.img} alt={service.name} style={{ width: "100%", borderRadius: "5px" }} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", marginTop: "30px" }}>
        <p>© 2025 ServiceEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Region;

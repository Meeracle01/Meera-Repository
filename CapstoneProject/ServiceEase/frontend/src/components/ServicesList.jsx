// src/components/ServicesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Update the port to 3000
    axios.get('http://localhost:3000/services')  // Using port 3000 for the backend
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  return (
    <div>
      <h2>Available Services</h2>
      <div>
        {services.length > 0 ? (
          <ul>
            {services.map(service => (
              <li key={service._id}>
                <h3>{service.name}</h3>
                <p>Category: {service.category}</p>
                <p>Price: ${service.price}</p>
                <p>Provider: {service.provider}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No services found</p>
        )}
      </div>
    </div>
  );
};

export default ServicesList;

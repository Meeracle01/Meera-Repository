import { useParams } from 'react-router-dom';

function ViewDetails() {
  const { serviceName } = useParams(); // Get service name from the URL
  const prices = [10, 20, 30, 50]; // Example data (can be dynamic)

  return (
    <div className="view-details-page">
      <h1>{serviceName} Details</h1>
      <div className="pricing-options">
        {prices.map((price, index) => (
          <div key={index} className="price-card">
            <p>Price Range: ${price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewDetails;

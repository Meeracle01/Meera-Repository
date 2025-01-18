import { useParams } from 'react-router-dom';

function BookServices() {
  const { serviceName } = useParams(); // Get service name from the URL

  return (
    <div className="book-services-page">
      <h1>Book {serviceName}</h1>
      <form>
        <label>Select Date:</label>
        <input type="date" />

        <label>Select Time:</label>
        <input type="time" />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookServices;

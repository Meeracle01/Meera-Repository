import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css'; // We will create a simple Login.css file for styling
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Track the state of the remember me checkbox
  const navigate = useNavigate(); // Navigate hook to redirect after login

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login by saving email in localStorage
    localStorage.setItem('userEmail', email);

    // Optionally, you can do authentication checks here
    
    // Redirect to the Home page and pass the email in state
    navigate('/', { state: { userEmail: email } });
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '20px' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Login to ServiceEase</h2>
      </header>

      {/* Login Form */}
      <section style={{ textAlign: 'center' }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', textAlign: 'left', fontSize: '14px' }}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                marginBottom: '10px',
                border: '2px solid #ccc',
                borderRadius: '5px',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', textAlign: 'left', fontSize: '14px' }}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                marginBottom: '10px',
                border: '2px solid #ccc',
                borderRadius: '5px',
              }}
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label htmlFor="rememberMe" style={{ fontSize: '14px' }}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                style={{ marginRight: '5px' }}
              />
              Remember Me
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <button type="submit" style={buttonStyle}>Login</button>
          </div>
        </form>

        {/* Link to Signup */}
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '30px' }}>
        <p>© 2025 ServiceEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Button Style
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Login;

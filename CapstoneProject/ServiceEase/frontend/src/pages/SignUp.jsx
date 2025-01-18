import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/service-ease-logo.jpg'; // Ensure logo is in your assets folder

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Track the "Remember Me" checkbox state
  const navigate = useNavigate();  // Hook to navigate after successful signup

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Here, you would typically send the form data to a server for registration
    alert(`Signed up with email: ${email}`);

    // After successful signup, navigate back to Home or any other page
    navigate('/'); // Redirects to the Home page after signup
  };

  // Styles (Inline)
  const formStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '2px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '30px',
    padding: '10px',
    fontSize: '12px',
    color: '#666',
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '20px' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <img
          src={logo}
          alt="ServiceEase Logo"
          style={{ height: '100px', marginBottom: '10px' }} // Logo size
        />
        <h2>Sign Up to ServiceEase</h2>
      </header>

      {/* Sign Up Form */}
      <section>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="firstName" style={{ display: 'block', textAlign: 'left', fontSize: '14px' }}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="lastName" style={{ display: 'block', textAlign: 'left', fontSize: '14px' }}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', textAlign: 'left', fontSize: '14px' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', textAlign: 'left', fontSize: '14px' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', textAlign: 'left', fontSize: '14px' }}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
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
            <button type="submit" style={buttonStyle}>Sign Up</button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>Already have an account? <a href="/login">Login</a></p>
        <p>© 2025 ServiceEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;

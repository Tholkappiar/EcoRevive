import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../New/Assets/ecorevive logo.png';
import Navbar from './Navbar';
import LoginNavbar from './Navbar/LoginNavbar';
function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = () => {
    return fetch('http://localhost:8080/login/get')
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const authenticate = (e) => {
    e.preventDefault();

    const userCheck = user.find((user) => user.username === username && user.password === password);

    if (username.length === 0) {
      setErrorMessage('Enter Username');
    } else if (password.length === 0) {
      setErrorMessage('Enter password');
    } else if (!userCheck) {
      setErrorMessage('Invalid credentials');
    } else {
      nav('/dashboard');
    }
  };
  return (
    <div className="login-container">
      <LoginNavbar/>
      <div className="login-form">
        <div className="log-container">
          <img className='logo' src={logo} alt="Logo" />
          <div className="header">
            <h1>EcoRevive</h1>
            <p>Enter Credentials For Login</p>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form>
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input id="login-username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input id='login-password'
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <input onClick={authenticate} className="login-btn" type="submit" value="LOGIN" />
          </form>
          <Link to="/Signup">
            <p>No Account? Signup Now!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

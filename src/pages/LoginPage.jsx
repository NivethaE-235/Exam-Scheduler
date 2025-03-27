import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../components/Auth/Login';
import Footer from '../components/Footer';
import '../styles/Login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <Navbar />
      <main className="main-content">
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
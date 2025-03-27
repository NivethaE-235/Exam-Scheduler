import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Register from '../components/Auth/Register';
import Footer from '../components/Footer';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="register-page">
      <Navbar />
      <main className="main-content">
        <Register />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="home">
      <Navbar />
      <Header />
      <main className="main-content">
        <h2>Welcome to Exam Scheduler</h2>
        <p>Plan your exams efficiently and stay organized!</p>
        <div className="home-buttons">
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleRegisterClick}>Register</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
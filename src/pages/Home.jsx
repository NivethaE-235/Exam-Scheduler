import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <h2>Welcome to Exam Scheduler</h2>
          <p>Plan your exams efficiently and stay organized!</p>
          <div className="cta-buttons">
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
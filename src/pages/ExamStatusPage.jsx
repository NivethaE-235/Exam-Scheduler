import React, { useEffect } from 'react'; // Add useEffect import
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExamStatus from '../components/ExamStatus';
import Footer from '../components/Footer';
import authService from '../api/authService';
import '../styles/ExamStatusPage.css';

const ExamStatusPage = () => {
  const navigate = useNavigate();

  useEffect(() => { // Now properly defined
    const checkAuth = () => {
      const user = authService.getCurrentUser();
      if (!user) {
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="exam-status-page">
      <Navbar />
      <main className="main-content">
        <h2>Exam Status</h2>
        <ExamStatus />
      </main>
      <Footer />
    </div>
  );
};

export default ExamStatusPage;
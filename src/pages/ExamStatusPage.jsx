import React from 'react';
import Navbar from '../components/Navbar';
import ExamStatus from '../components/ExamStatus';
import Footer from '../components/Footer';
import '../styles/ExamStatus.css';

const ExamStatusPage = () => {
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
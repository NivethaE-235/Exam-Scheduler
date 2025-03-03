import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ExamForm from '../components/ExamForm';
import ExamList from '../components/ExamList';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';

const DashboardPage = () => {
  const [exams, setExams] = useState([]);

  const addExam = (exam) => {
    setExams([...exams, exam]);
  };

  const deleteExam = (id) => {
    setExams(exams.filter((exam) => exam.id !== id));
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="main-content">
        <h2>Dashboard</h2>
        <ExamForm addExam={addExam} />
        <ExamList exams={exams} deleteExam={deleteExam} />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExamForm from '../components/ExamForm';
import ExamList from '../components/ExamList';
import Footer from '../components/Footer';
import authService from '../api/authService';
import examService from '../api/examService';
import { checkUpcomingExams } from '../api/notificationService';
import '../styles/Dashboard.css';

const DashboardPage = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const user = authService.getCurrentUser();
        if (!user || !user.token) {
          navigate('/login');
          return;
        }
        const examsData = await examService.getExams(user.token);
        setExams(examsData);
        checkUpcomingExams(examsData);
      } catch (err) {
        console.error('Error fetching exams:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, [navigate]);

  const handleAddExam = async (examData) => {
    try {
      const user = authService.getCurrentUser();
      const newExam = await examService.addExam(examData, user.token);
      setExams([...exams, newExam]);
      checkUpcomingExams([...exams, newExam]);
    } catch (err) {
      console.error('Error adding exam:', err);
    }
  };

  const handleDeleteExam = async (id) => {
    try {
      const user = authService.getCurrentUser();
      await examService.deleteExam(id, user.token);
      setExams(exams.filter((exam) => exam._id !== id));
    } catch (err) {
      console.error('Error deleting exam:', err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const user = authService.getCurrentUser();
      const updatedExam = await examService.updateExamStatus(id, status, user.token);
      setExams(exams.map(exam => 
        exam._id === id ? updatedExam : exam
      ));
    } catch (err) {
      console.error('Error updating exam status:', err);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="main-content">
        <h2>Dashboard</h2>
        <ExamForm addExam={handleAddExam} />
        <ExamList 
          exams={exams} 
          deleteExam={handleDeleteExam}
          updateStatus={handleStatusChange}
        />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
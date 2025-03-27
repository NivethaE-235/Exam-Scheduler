import React, { useEffect, useState } from 'react';
import examService from '../api/examService';
import authService from '../api/authService';
import '../styles/CalendarView.css';

const CalendarView = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const user = authService.getCurrentUser();
        if (user && user.token) {
          const examsData = await examService.getExams(user.token);
          setExams(examsData);
        }
      } catch (err) {
        console.error('Error fetching exams:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  if (loading) return <div className="loading">Loading calendar...</div>;

  return (
    <div className="calendar-view">
      <h2>Exam Calendar</h2>
      <div className="calendar-grid">
        {exams.map(exam => (
          <div key={exam._id} className={`calendar-event ${exam.status}`}>
            <h3>{exam.name}</h3>
            <p>{new Date(exam.date).toLocaleDateString()}</p>
            <p>{exam.time}</p>
            <span className="status-badge">{exam.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
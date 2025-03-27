import React, { useEffect, useState } from 'react'; // Must include all needed hooks
import examService from '../api/examService';
import authService from '../api/authService';
import '../styles/ExamStatus.css';

const ExamStatus = () => {
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

  if (loading) return <div className="loading">Loading status...</div>;

  const upcomingExams = exams.filter(exam => exam.status === 'upcoming');
  const completedExams = exams.filter(exam => exam.status === 'completed');

  return (
    <div className="exam-status">
      <div className="status-section">
        <h3>Upcoming Exams ({upcomingExams.length})</h3>
        {upcomingExams.length > 0 ? (
          <ul>
            {upcomingExams.map(exam => (
              <li key={exam._id}>
                <strong>{exam.name}</strong> - {new Date(exam.date).toLocaleDateString()} at {exam.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming exams</p>
        )}
      </div>
      <div className="status-section">
        <h3>Completed Exams ({completedExams.length})</h3>
        {completedExams.length > 0 ? (
          <ul>
            {completedExams.map(exam => (
              <li key={exam._id}>
                <strong>{exam.name}</strong> - {new Date(exam.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed exams</p>
        )}
      </div>
    </div>
  );
};

export default ExamStatus;
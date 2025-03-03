import React from 'react';
import '../styles/ExamStatus.css';

const ExamStatus = () => {
  const upcomingExams = [
    { id: 1, name: 'Math Exam', date: '2023-12-15', time: '10:00 AM' },
    { id: 2, name: 'Science Exam', date: '2023-12-20', time: '02:00 PM' },
  ];

  const completedExams = [
    { id: 3, name: 'History Exam', date: '2023-11-30', time: '09:00 AM' },
  ];

  return (
    <div className="exam-status">
      <h3>Upcoming Exams</h3>
      <ul>
        {upcomingExams.map((exam) => (
          <li key={exam.id}>
            {exam.name} - {exam.date} at {exam.time}
          </li>
        ))}
      </ul>
      <h3>Completed Exams</h3>
      <ul>
        {completedExams.map((exam) => (
          <li key={exam.id}>
            {exam.name} - {exam.date} at {exam.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamStatus;
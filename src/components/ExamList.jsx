import React from 'react';
import '../styles/ExamList.css';

const ExamList = ({ exams, deleteExam, updateStatus }) => {
  const handleStatusChange = (id, currentStatus) => {
    const newStatus = currentStatus === 'upcoming' ? 'completed' : 'upcoming';
    updateStatus(id, newStatus);
  };

  return (
    <div className="exam-list">
      {exams.length === 0 ? (
        <p className="no-exams">No exams scheduled yet</p>
      ) : (
        exams.map((exam) => (
          <div key={exam._id} className="exam-item">
            <div className="exam-info">
              <h3>{exam.name}</h3>
              <p>Date: {new Date(exam.date).toLocaleDateString()}</p>
              <p>Time: {exam.time}</p>
              <p className={`status ${exam.status}`}>
                Status: {exam.status}
              </p>
            </div>
            <div className="exam-actions">
              <button
                onClick={() => handleStatusChange(exam._id, exam.status)}
                className={`status-btn ${exam.status}`}
              >
                {exam.status === 'upcoming' ? 'Mark Completed' : 'Mark Upcoming'}
              </button>
              <button
                onClick={() => deleteExam(exam._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ExamList;
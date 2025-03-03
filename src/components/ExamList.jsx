import React from 'react';
import '../styles/ExamList.css';

const ExamList = ({ exams, deleteExam }) => {
  return (
    <div className="exam-list">
      {exams.map((exam) => (
        <div key={exam.id} className="exam-item">
          <h3>{exam.name}</h3>
          <p>Date: {exam.date}</p>
          <p>Time: {exam.time}</p>
          <button onClick={() => deleteExam(exam.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExamList;
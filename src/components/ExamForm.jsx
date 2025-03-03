import React, { useState } from 'react';
import '../styles/ExamForm.css';

const ExamForm = ({ addExam }) => {
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [examTime, setExamTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!examName || !examDate || !examTime) return;
    addExam({ id: crypto.randomUUID(), name: examName, date: examDate, time: examTime });
    setExamName('');
    setExamDate('');
    setExamTime('');
  };

  return (
    <form className="exam-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exam Name"
        value={examName}
        onChange={(e) => setExamName(e.target.value)}
      />
      <input
        type="date"
        value={examDate}
        onChange={(e) => setExamDate(e.target.value)}
      />
      <input
        type="time"
        value={examTime}
        onChange={(e) => setExamTime(e.target.value)}
      />
      <button type="submit">Add Exam</button>
    </form>
  );
};

export default ExamForm;
import React, { useState } from 'react';
import '../styles/ExamForm.css';

const ExamForm = ({ addExam }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    status: 'upcoming'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.time) return;
    addExam(formData);
    setFormData({
      name: '',
      date: '',
      time: '',
      status: 'upcoming'
    });
  };

  return (
    <form className="exam-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Exam Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="upcoming">Upcoming</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Exam</button>
    </form>
  );
};

export default ExamForm;
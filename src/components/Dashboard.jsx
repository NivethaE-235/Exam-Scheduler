import React from 'react';
import CalendarView from './CalendarView';
import ExamStatus from './ExamStatus';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-section">
        <h2>Upcoming Exams</h2>
        <CalendarView />
      </div>
      <div className="dashboard-section">
        <h2>Exam Status</h2>
        <ExamStatus />
      </div>
    </div>
  );
};

export default Dashboard;
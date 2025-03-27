import React, { useEffect, useState } from 'react';
import { checkUpcomingExams } from '../api/notificationService';
import examService from '../api/examService';
import authService from '../api/authService';
import '../styles/NotificationBell.css';

const NotificationBell = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [upcomingExams, setUpcomingExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const user = authService.getCurrentUser();
        if (user && user.token) {
          const exams = await examService.getExams(user.token);
          const now = new Date();
          const in24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
          const upcoming = exams.filter(exam => {
            const examDate = new Date(exam.date);
            return exam.status === 'upcoming' && examDate > now && examDate <= in24Hours;
          });
          setUpcomingExams(upcoming);
          setNotificationCount(upcoming.length);
          checkUpcomingExams(exams);
        }
      } catch (err) {
        console.error('Error fetching exams:', err);
      }
    };
    fetchExams();
  }, []);

  return (
    <div className="notification-bell">
      <button 
        onClick={() => setShowNotifications(!showNotifications)}
        className={notificationCount > 0 ? 'has-notifications' : ''}
      >
        🔔 {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
      </button>
      {showNotifications && (
        <div className="notification-dropdown">
          {upcomingExams.length > 0 ? (
            upcomingExams.map(exam => (
              <div key={exam._id} className="notification-item">
                <p>{exam.name} at {new Date(exam.date).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No upcoming exams in the next 24 hours</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
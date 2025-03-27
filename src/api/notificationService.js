export const showNotification = (title, options) => {
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification');
    return;
  }

  if (Notification.permission === 'granted') {
    new Notification(title, options);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, options);
      }
    });
  }
};

export const checkUpcomingExams = (exams) => {
  const now = new Date();
  const in24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  exams.forEach(exam => {
    const examDate = new Date(exam.date);
    if (exam.status === 'upcoming' && examDate > now && examDate <= in24Hours) {
      showNotification('Upcoming Exam', {
        body: `${exam.name} is scheduled for ${examDate.toLocaleString()}`,
        icon: '/favicon.ico'
      });
    }
  });
};
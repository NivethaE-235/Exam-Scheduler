import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import ExamStatusPage from '../pages/ExamStatusPage';
import ErrorBoundary from '../components/ErrorBoundary';

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/exam-status" element={<ExamStatusPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
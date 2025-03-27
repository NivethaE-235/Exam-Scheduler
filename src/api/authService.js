// src/api/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const authService = {
  async login(credentials) {
    try {
      // Validate input
      if (!credentials.email || !credentials.password) {
        throw new Error('Email and password are required');
      }

      // Normalize email to lowercase
      const normalizedCredentials = {
        ...credentials,
        email: credentials.email.toLowerCase()
      };

      const response = await axios.post(`${API_URL}/login`, normalizedCredentials, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000
      });

      if (!response.data.success) {
        throw new Error(response.data.message || 'Login failed');
      }

      // Store user data in localStorage
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;

    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Login failed';
      
      if (error.response) {
        errorMessage = error.response.data.message || 
          `Error: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'Server is not responding';
      }
      
      throw new Error(errorMessage);
    }
  },

  async register(userData) {
    try {
      // Validate input
      if (!userData.name || !userData.email || !userData.password) {
        throw new Error('All fields are required');
      }

      // Normalize email to lowercase
      const normalizedData = {
        ...userData,
        email: userData.email.toLowerCase()
      };

      const response = await axios.post(`${API_URL}/register`, normalizedData);

      if (!response.data.success) {
        throw new Error(response.data.message || 'Registration failed');
      }

      return response.data;

    } catch (error) {
      console.error('Registration error:', error);
      let errorMessage = 'Registration failed';
      
      if (error.response) {
        errorMessage = error.response.data.message || 
          `Error: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'Server is not responding';
      }
      
      throw new Error(errorMessage);
    }
  },

  getCurrentUser() {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error getting user from localStorage:', error);
      return null;
    }
  },

  logout() {
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
};

export default authService;
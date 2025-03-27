import axios from 'axios';

const API_URL = 'http://localhost:5000/api/exams';

const examService = {
  async getExams(token) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(API_URL, config);
      return response.data;
    } catch (error) {
      console.error('Error fetching exams:', error);
      throw error;
    }
  },

  async addExam(examData, token) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(API_URL, examData, config);
      return response.data;
    } catch (error) {
      console.error('Error adding exam:', error);
      throw error;
    }
  },

  async updateExamStatus(examId, status, token) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `${API_URL}/${examId}/status`,
        { status },
        config
      );
      return response.data;
    } catch (error) {
      console.error('Error updating exam status:', error);
      throw error;
    }
  },

  async deleteExam(examId, token) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(`${API_URL}/${examId}`, config);
      return response.data;
    } catch (error) {
      console.error('Error deleting exam:', error);
      throw error;
    }
  },
};

export default examService;
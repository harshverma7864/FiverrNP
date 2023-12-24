// apiService.js
import { API_BASE_URL } from '../environment';


const GigService = {
  async allGigs(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
  async getGigById(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default GigService;
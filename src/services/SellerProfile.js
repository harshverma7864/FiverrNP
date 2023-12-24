// apiService.js
import { API_BASE_URL } from '../environment';


const CategoryService = {
  async fetchData(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default CategoryService;
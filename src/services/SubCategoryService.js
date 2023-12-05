// apiService.js

const API_BASE_URL = 'https://np-django-4f1d7b37ade6.herokuapp.com';

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
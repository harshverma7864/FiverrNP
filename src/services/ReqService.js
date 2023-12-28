// apiService.js
import Cookies from 'js-cookie';
import { API_BASE_URL } from '../environment';
const accessToken = Cookies.get("accessToken");


const ReqService = {
  async fetchData() {
    try {
      const response = await fetch(`${API_BASE_URL}/request-project/quote/` , {
        method:'GET',
        headers:{
            'Authorization':`Bearer ${accessToken}`
        }
      });
      
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

export default ReqService;
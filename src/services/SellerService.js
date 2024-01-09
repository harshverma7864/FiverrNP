// apiService.js
import Cookies from 'js-cookie';
import { API_BASE_URL, SELLER_URI } from '../environment';
import axiosInstance from '../utils/axios'
const accessToken = Cookies.get("accessToken");

const userCookie = Cookies.get("user");






console.log(accessToken);

const SellerService = {
  async retrieveSellerProfile(sellerId) {
    try {
      const response = await fetch(`${API_BASE_URL}/${SELLER_URI}/${sellerId}`, {
        method: 'GET', // Assuming you are retrieving data, so changing to GET
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching seller profile:', error);
      throw error;
    }
  }
};

export default SellerService;

// apiService.js
import Cookies from 'js-cookie';
import { API_BASE_URL, SELLER_URI } from '../environment';

const accessToken = Cookies.get("accessToken");

const SellerProfile = {
  async retrieveSellerProfile() {
    console.log(API_BASE_URL + "/" + SELLER_URI);
    console.log(`Bearer ${accessToken}`);

    try {
      const response = await fetch(`${API_BASE_URL}/${SELLER_URI}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          // Adjust content type based on your API requirements
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default SellerProfile;

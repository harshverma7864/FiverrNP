// apiService.js
import Cookies from 'js-cookie';
import { API_BASE_URL, SELLER_URI } from '../environment';

const accessToken = Cookies.get("accessToken");
const userProfile = JSON.parse(Cookies.get("user"));

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
  },

  async createSeller(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/${SELLER_URI}/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language_proficiency: formData.get("language_proficiency"),
          skills: formData.get("skills"),
          education: formData.get("education"),
          certifications: formData.get("certifications"),
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating seller:', error);
      throw error;
    }
  },

  async setUserLogin() {
    try {
      const setUserLoginFormData = new FormData();
      setUserLoginFormData.append("first_login", "false");

      const userId = userProfile.id;
      const response = await fetch(`${API_BASE_URL}/${SELLER_URI}/${userId}/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: setUserLoginFormData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        userProfile.first_login = "false";
        Cookies.set("user", JSON.stringify(userProfile));
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error updating user login status:', error);
      throw error;
    }
  },
};

export default SellerService;

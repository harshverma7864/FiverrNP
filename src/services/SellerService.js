// apiService.js
import Cookies from 'js-cookie';
import { API_BASE_URL, SELLER_URI } from '../environment';

const accessToken = Cookies.get("accessToken");

// function stringifyValue(value) {
//   if (typeof value === 'object') {
//       if (Array.isArray(value)) {
//           return `[${value.map(stringifyValue).join(', ')}]`;
//       } else {
//           return JSON.stringify(value);
//       }
//   } else {
//       return value;
//   }
// }


const SellerService = {
  async retriveSellerProfile(sellerId) {
    console.log(API_BASE_URL+ "/" + SELLER_URI + "/" + sellerId)
    // console.log(`Bearer ${accessToken}`)

    try {
        const response = await fetch(`${API_BASE_URL}/${SELLER_URI}/${sellerId}`, {
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
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
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
            // Add other fields as needed
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
  





};

export default SellerService;
// apiService.js
import Cookies from 'js-cookie';
import { API_BASE_URL, SELLER_URI } from '../environment';

const accessToken = Cookies.get("accessToken");

function stringifyValue(value) {
  if (typeof value === 'object') {
      if (Array.isArray(value)) {
          return `[${value.map(stringifyValue).join(', ')}]`;
      } else {
          return JSON.stringify(value);
      }
  } else {
      return value;
  }
}


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
  //   for (let pair of formData.entries()) {
  //     console.log(pair[0] + ': ' + stringifyValue(pair[1]));
  // }
// console.log(formData)
const urlEncodedData = new URLSearchParams();

    // Append each field from the formData to the URLSearchParams object
    for (let pair of formData.entries()) {
        urlEncodedData.append(pair[0], stringifyValue(pair[1]));
    }
    try {
        const response = await fetch(`${API_BASE_URL}/${SELLER_URI}/` ,{
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: urlEncodedData.toString()
        });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} ${response.error}`  );
      }else{
        const data = await response.json();
        return data;
      }

     
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }



    
  },



};

export default SellerService;
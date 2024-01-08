// apiService.js
import Cookies from 'js-cookie';
import { API_BASE_URL, SELLER_URI } from '../environment';
import axiosInstance from '../utils/axios'
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

 
// const urlEncodedData = new URLSearchParams();
    // try {
    //     const response = await fetch(`${API_BASE_URL}/${SELLER_URI}/` ,{
    //       method: 'POST',
    //       headers: {
    //         'Authorization': `Bearer ${accessToken}`,
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       body: formData
    //     });
      
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status} ${response.error}`  );
    //   }else{
    //     const data = await response.json();
    //     try {
    //       const setUserLogin = new FormData();
    //       setUserLogin.append("first_login", "false")
    //       const userId = userProfile.id;
    //       const response = await fetch(`${API_BASE_URL}/${SELLER_URI}/${userId}/` ,{
    //         method: 'POST',
    //         headers: {
    //           'Authorization': `Bearer ${accessToken}`,
    //         },
    //         body: setUserLogin
    //       });
        
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status} ${response.error}`  );
    //     }else{

    //       userProfile.first_login = "false";

    //       Cookies.set("user", userProfile)

    //       const data = await response.json();
    //       return data;
    //     }
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     throw error;
    //   }
    //     }
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   throw error;
    // }


    
    axiosInstance
    .post(`${API_BASE_URL}/${SELLER_URI}/`, formData)
    .then(async (res) => {
        

      
    })
    .catch((error) => {
      // Handle any errors that occur during the first API request
      console.error('Login failed:', error);
    });


    
  },
};

export default SellerService;

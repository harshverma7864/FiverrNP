import React, { useState, useEffect } from 'react';
import style from '../../assets/styles/requestpages/req2.module.css';
// import { Navbar2 } from '../../components';
import image from '../../assets/images/planning 1.png';
import axiosInstance from '../../utils/axios';

const RequestPage2 = () => {
  const [reqData, setReqData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const [requsetId, setRequsetId] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null); // Initialize the state for the selected item

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('request-project/quote/');
        // Filter data where assigned_to is null
        const filteredData = response.data.filter(item => item.assigned_to === null);
        setReqData(filteredData);
        // Fetch additional data for each request after fetching the main data
        fetchAdditionalData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);  

  const fetchAdditionalData = async (data) => {
    try {
      const additionalDataPromises = data.map(async (project) => {
        const response = await axiosInstance.get(`accounts/user/`, {
          // You might want to pass some parameters or headers here
        });
        return response.data;
      });
  
      const additionalDataResults = await Promise.all(additionalDataPromises);
  
      console.log('All additional data:', additionalDataResults);
  
      const uniqueIds = new Set();
      const serviceProviders = additionalDataResults.flatMap((userSet) =>
        userSet.filter((user) => {
          // Check if the user_type is 'service_provider' and the id is not in the Set
          if (user.user_type === 'service_provider' && !uniqueIds.has(user.id)) {
            // If true, add the id to the Set and return true to include the user
            uniqueIds.add(user.id);
            return true;
          }
          return false;
        })
      );
      
      console.log('Service Providers:', serviceProviders);
      
      
      console.log('All users with service provider:', serviceProviders);
      
      setAdditionalData( serviceProviders);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  const handleSubmitClick = async () => {
    try {
      if (selectedItemId !== null) {
        const response = await axiosInstance.put(`request-project/quote/${requsetId}/`, {
          assigned_to: selectedItemId,
          // Add other data if needed
        });
        console.log('API Response:', response.data); // Assuming the response contains a 'data' property
        console.log(selectedItemId);
      } else {
        console.warn('Please select an item before submitting.');
      }
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };  

  return (
    <>
      {/* <Navbar2 userType="internal_manager" /> */}
      {/* <div className={style.container}> */}
        {/* <div className={style.reqCard}> */}
          <h3 className={style.heading}>Projects</h3>

          <table className={style.tableHeader}>
            <thead>
              <tr>
                <th className={style.projectHeading}>
                  <img src={image} alt='img' />
                  Projects ({reqData.length})
                </th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Assigned TO</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
  {reqData.map((project, index) => (
    <tr
      key={project.id}
      className={style.projectData}
      onClick={() => setRequsetId(project.id)}
    >
      <td className={style.projectTitle}>{project.project_type}</td>
      <td>{project.industry}</td>
      <td>{project.subsub_category}</td>
      <td>
        <select
          className='requestpage'
          onChange={(e) => {
            setSelectedItemId(e.target.value);
          }}
          value={selectedItemId}
        >
          <option value="">Select Assigned User</option>
          {additionalData.map((data, i) => (
            <option key={i} value={data.id}>
              {data.first_name} {data.last_name}
            </option>
          ))}
        </select>

        <button onClick={handleSubmitClick}> Submit</button>
      </td>
      <td>{project.status ? 'Yes' : 'No'}</td>
    </tr>
  ))}
</tbody>

          </table>
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default RequestPage2;

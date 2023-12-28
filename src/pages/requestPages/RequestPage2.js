import React, { useState, useEffect } from 'react';
import style from '../../assets/styles/requestpages/req2.module.css';
import interViewImage from '../../assets/images/interview.png';
import { Navbar2 } from '../../components';
import ReqService from '../../services/ReqService';
import image from '../../assets/images/planning 1.png';
import axiosInstance from '../../utils/axios';

const RequestPage2 = () => {
  const [reqData, setReqData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`request-project/quote/`);
        setReqData(response.data);
        console.log(response);
        // Fetch additional data for each request after fetching the main data
        fetchAdditionalData(response.data);
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
  
      // Use map to find users with 'service_provider' in each set
      const usersWithServiceProvider = additionalDataResults.map((userSet) =>
        userSet.find((user) => user.user_type === 'service_provider')
      );
  
      console.log('Users with service provider:', usersWithServiceProvider);
  
      // Filter out undefined values
      const filteredUsers = usersWithServiceProvider.filter(Boolean);
  
      console.log('Filtered users:', filteredUsers);
  
      setAdditionalData(filteredUsers);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };
  
  
  
  
  

  return (
    <>
      <Navbar2 userType="internal_manager" />
      <div className={style.container}>
        <div className={style.reqCard}>
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
          <tr key={project.id} className={style.projectData}>
            <td className={style.projectTitle}>{project.project_type}</td>
            <td>{project.industry}</td>
            <td>{project.subsub_category}</td>
            <td>
            <select className='requestpage'>
  {additionalData.map((data, i) => (
    <option key={i} value={data.first_name}>
      {data.first_name}
    </option>
  ))}
</select>

            </td>
            <td>{project.status ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RequestPage2;

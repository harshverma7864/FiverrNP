import React, { useState, useEffect } from 'react';
import style from '../../assets/styles/requestpages/req2.module.css';
import image from '../../assets/images/planning 1.png';
import axiosInstance from '../../utils/axios';

const RequestPage2 = () => {
  const [reqData, setReqData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const [requsetId, setRequsetId] = useState(null);
  // const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemIds, setSelectedItemIds] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('request-project/quote/');
        const filteredData = response.data.filter(item => item.assigned_to === null);
        setReqData(filteredData);
        fetchAdditionalData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

    // Set up auto-refresh every 2 minutes
    const intervalId = setInterval(() => {
      fetchData();
    }, 2 * 60 * 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchAdditionalData = async (data) => {
    try {
      const additionalDataPromises = data.map(async (project) => {
        const response = await axiosInstance.get(`accounts/user/`);
        return response.data;
      });

      const additionalDataResults = await Promise.all(additionalDataPromises);

      const uniqueIds = new Set();
      const serviceProviders = additionalDataResults.flatMap((userSet) =>
        userSet.filter((user) => {
          if (user.user_type === 'service_provider' && !uniqueIds.has(user.id)) {
            uniqueIds.add(user.id);
            return true;
          }
          return false;
        })
      );

      setAdditionalData(serviceProviders);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  const handleSubmitClick = async () => {
    try {
      if (selectedItemIds[requsetId] !== undefined && requsetId !== null) {
        const response = await axiosInstance.put(`request-project/quote/${requsetId}/`, {
          assigned_to: selectedItemIds[requsetId],
        });
        console.log('API Response:', response.data);
        console.log(selectedItemIds[requsetId]);
  
        // Reload the page after submitting
        window.location.reload();
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
    const requestId = project.id;
    setSelectedItemIds((prevSelectedItems) => ({
      ...prevSelectedItems,
      [requestId]: e.target.value,
    }));
  }}
  value={selectedItemIds[project.id] || ''}
>
  <option value="">Select Assigned User</option>
  {additionalData.map((data, i) => (
    <option key={i} value={data.id}>
      {data.first_name} {data.last_name}
    </option>
  ))}
</select>


        <button className= "homepage_bannerButton__4F8YK" onClick={handleSubmitClick}> Submit</button>
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

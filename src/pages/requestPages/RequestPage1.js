import React, { useState, useEffect } from 'react';
import style from '../../assets/styles/requestpages/req1.module.css';
import interViewImage from '../../assets/images/interview.png';
import { Navbar2 } from '../../components';
import axiosInstance from '../../utils/axios';
import { useHistory } from 'react-router-dom';

const RequestPage1 = () => {
  const [reqData, setReqData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`request-project/quote/`);
        setReqData(response.data);
        // Fetch additional data for each request after fetching the main data
        fetchAdditionalData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchAdditionalData = async (requestData) => {
    try {
      const ids = requestData.map((item) => item.id);
      console.log(ids)
      const response = await axiosInstance.get(`accounts/user/?ids=${ids.join(',')}`);
      setAdditionalData(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  const handleNextClick = () => {
    history.push('./requests2');
  }

  const countStatus = (statusValue) => {
    const count = reqData.filter((row) => row.status === statusValue).length;
    return count;
  };
  

  return (
    <>
      <Navbar2 userType="internal_manager" />
      <div className={style.container}>
        <div className={style.reqCard}>
          <h3 className={style.heading}>Requests</h3>

          <div className={style.reqCardHeader}>
            <div className={style.headerLeft}>
              <div className={style.leftHeaderItems} style={{ backgroundColor: "#F04C43" }}>Requests</div>
              <div className={style.leftHeaderItems}>Pending Projects</div>
              <div className={style.leftHeaderItems}>Service Providers</div>
              <div className={style.leftHeaderItems}>Package</div>
            </div>
            <div className={style.headerRight}>
        <img src={interViewImage} alt='img' /> &nbsp;&nbsp;
        <div>
          Requestes: ({countStatus(true)})
        </div>
      </div>
          </div>
          <div className={style.tableContainer}>
            <table className={style.table}>
              <thead className={style.tableHeader}>
                <tr>
                  <th>S NO</th>
                  <th>Category</th>
                  <th>Sub Category</th>
                  <th>Requested By</th>
                  <th>Package</th>
                  <th>Comments/Message</th>
                </tr>
              </thead>
              <tbody>
                {reqData.map((row, index) => (
                  <tr key={index} className={style.tableRow}>
                    <td>{row.id}</td>
                    <td>{row.industry}</td>
                    <td>{row.subsub_category}</td>
                    <td>
  {additionalData[index] ? (
    <span>{additionalData[index].first_name}</span>
  ) : (
    <span>Loading...</span>
  )}
</td>

                    <td>{row.quote_amount}</td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button onClick={handleNextClick}> Next Page </button>
      </div>
    </>
  );
};

export default RequestPage1;

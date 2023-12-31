import React, { useState, useEffect } from 'react';
import style from '../../assets/styles/requestpages/req1.module.css';
import interViewImage from '../../assets/images/interview.png';
import { Navbar2 } from '../../components';
import axiosInstance from '../../utils/axios';
import RequestPage2 from './RequestPage2';

const RequestPage1 = () => {
  const [reqData, setReqData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const [activeHeader, setActiveHeader] = useState("Requests");

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
      const response = await axiosInstance.get(`accounts/user/?ids=${ids.join(',')}`);
      setAdditionalData(response.data);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  const countStatus = (statusValue) => {
    return reqData.filter((row) => row.status === statusValue).length;
  };

  const handleHeaderClick = (header) => {
    setActiveHeader(header);
  };

  return (
    <>
      <Navbar2 userType="internal_manager" />
      <div className={style.container}>
        <div className={style.reqCard}>
          <h3 className={style.heading}>Requests</h3>

          <div className={style.reqCardHeader}>
            <div className={style.headerLeft}>
              {["Requests", "Pending Projects", "Service Providers", "Package"].map((header) => (
                <div
                  key={header}
                  className={style.leftHeaderItems}
                  style={{ backgroundColor: activeHeader === header ? "#F04C43" : "transparent" }}
                  onClick={() => handleHeaderClick(header)}
                >
                  {header}
                </div>
              ))}
            </div>

            <div className={style.headerRight}>
              <img src={interViewImage} alt='Interview' /> &nbsp;&nbsp;
              <div>
                Requests: ({countStatus(true)})
              </div>
            </div>
          </div>
          <div className={style.tableContainer}>
            {activeHeader === "Requests" ? (
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
            ) : activeHeader === "Pending Projects" ? (
              <RequestPage2 />
            ) : null}
          </div>
        </div>


      </div>
    </>
  );
};

export default RequestPage1;

import React, { useState , useEffect} from 'react'
import style from '../../assets/styles/requestpages/req1.module.css'
import interViewImage from '../../assets/images/interview.png'
import { Navbar2 } from '../../components'
import ReqService from '../../services/ReqService'
import image from '../../assets/images/planning 1.png'

const RequestPage2 = () => {


    const [reqData , setReqData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await ReqService.fetchData();
            setReqData(result);
            
          } catch (error) {
            // Handle error
            console.error('Error in component:', error);
          }
        };
    
        fetchData();
      }, []);




  return (
    <>
    <Navbar2 userType="internal_manager" />
    <div className={style.container}>
    <div className={style.reqCard}>
    <h3 className={style.heading}>Projects</h3>

        <div className={style.tableHeader}>
            <ul className={style.tableUl}>
                <li className={style.projectHeading}>  
                    <img src={image} />
                    Projects (4)</li>
                <li>Category</li>
                <li>Sub Category</li>
                <li>Assigned TO</li>
                <li>Status</li>
                <li>Comments/Message</li>
            </ul>

            <ul className={style.projectData}>
                <li className={style.projectTitle}>Project 1</li>
                <li>erwr</li>
                <li>werwr</li>
                <li>werwer</li>
                <li>werewr</li>
                <li>ewrwerw</li>
            </ul>


        </div>
    </div>
    </div>
    </>
  )
}

export default RequestPage2
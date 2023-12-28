import React, { useState , useEffect} from 'react'
import style from '../../assets/styles/requestpages/req1.module.css'
import interViewImage from '../../assets/images/interview.png'
import { Navbar2 } from '../../components'
import ReqService from '../../services/ReqService'

const RequestPage1 = () => {


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
    <h3 className={style.heading}>Requests</h3>

        <div class={style.reqCardHeader}>
            <div className={style.headerLeft}>
                <div className={style.leftHeaderItems} style={{backgroundColor:"#F04C43"}}>Requests</div>
                <div className={style.leftHeaderItems}>Pending Projects</div>
                <div className={style.leftHeaderItems}>Service Providers</div>
                <div className={style.leftHeaderItems}>Package</div>
            </div>
            <div className={style.headerRight}>
                <img src={interViewImage} /> &nbsp;&nbsp;
                    Requests (3)
            </div>            
        </div>
        <div className={style.tableHeader}>
            <ul className={style.tableUl}>
                <li>S NO</li>
                <li>Category</li>
                <li>Sub Category</li>
                <li>Requested By</li>
                <li>Package</li>
                <li>Comments/Message</li>
            </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default RequestPage1
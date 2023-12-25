import React from 'react'
import popupStyle from '../../assets/styles/popup.module.css'
import messageUser from '../../assets/images/messageUser.png'
import speaker from '../../assets/images/Group.png'
import gear from '../../assets/images/Vector.png'

const Popup = ({title , contentList}) => {
  return (
    <>
    
    <div className={popupStyle.popupMain} style={{right : title === "Notifications" ? ("80px"):("")}}>
        <h5>{title}</h5>

    { contentList.map((item , index)=>(

        <div className={popupStyle.messageCard}>
          <div className={popupStyle.profileImage}></div>
          <div className={popupStyle.messageContent}>
            <div className={popupStyle.userInfo}> <h5>{item.name}</h5> <p>@{item.username}</p> </div>
            <p>{item.message}</p>
          </div>
        </div>))
    }


        <div className={popupStyle.messageFooter}>
          <div className={popupStyle.icons}>
            <img src={speaker}/>
            <img src={gear}/>
          </div>
          <p>{title === "Notifications" ? (""):("See All In Inbox")}</p>
        </div>
    </div>
    </>
  )
}


export default Popup
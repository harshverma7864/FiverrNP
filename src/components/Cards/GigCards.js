import React from 'react'
import gigCardStyle from '../../assets/styles/card/gigCardStyle.module.css'
import gigCardImage from '../../assets/images/cardimage1.png'
import crown from '../../assets/images/crown.png'
import { useHistory } from 'react-router-dom'

const GigCards = ({gigsData}) => {

    const history = useHistory();

    const handleGigCardClick = (id)=>{
        history.push(`/gigdetails?code=${id}`);
    }


  return (
    <>

        <div onClick={() => handleGigCardClick(gigsData.id)} className={gigCardStyle.card}>
            <div className={gigCardStyle.cardImage}>
                <img src={gigCardImage} alt='Card Image'/>
            </div>

            <div className={gigCardStyle.gigCardContent}>
                <div className={gigCardStyle.firstLine}>
                    <h3>{gigsData.title}</h3> 
                    <span className={gigCardStyle.premium}> Pro <span><img src={crown}/></span> </span>
                </div>    
                <p>{gigsData.short_description}          </p>
                <div className={gigCardStyle.firstLine}>
                    <div className={gigCardStyle.rating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white"/>
                        </svg>
                        &nbsp; <span className={gigCardStyle.ratingNumber}>{gigsData.average_rating}</span> &nbsp; (1k+)
                    </div>

                    <div className={gigCardStyle.pricing}>From <span style={{color:'#F04C43'}}>&#8377; {gigsData.price}</span></div>
                </div>
             </div>
        </div>
    </>
  )
}

export default GigCards
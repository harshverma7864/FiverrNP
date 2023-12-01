import React from 'react'
import cardStyle from '../assets/styles/card.module.css'
import cardImage from  '../assets/images/cardimage1.png'
import noImage from '../assets/images/cardimage2.png'
const Card = ({heading , subHeadings}) => {

  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.cardImage}>
        <img src={cardImage} alt={noImage}/>
      </div>
      <h4>{heading}</h4>
      {
        subHeadings.map((item , index)=>(
          <p key={index}>{item}</p>
        ))
      }
    </div>
  )
}

export default Card
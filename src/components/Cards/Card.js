import React from 'react'
import cardStyle from '../../assets/styles/card/card.module.css'
import cardImage from  '../../assets/images/cardimage1.png'
import noImage from '../../assets/images/cardimage2.png'
import { useHistory } from 'react-router-dom'
const Card = ({heading , subHeadings}) => {


  const history = useHistory();

  const handleClick = (subcategory_name)=>{
    history.push(`/search?search=${subcategory_name}`)
  }

  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.cardImage}>
        <img src={cardImage} alt={noImage}/>
      </div>
      <h4>{heading}</h4>
      {
        subHeadings.map((item , index)=>(
          <p key={index} onClick={()=>handleClick(item.subcategory_name)}>{item.subcategory_name}</p>
        )) 
      }
    </div>
  )
}

export default Card
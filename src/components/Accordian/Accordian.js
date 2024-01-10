import React, { useState } from 'react';
import style from '../../assets/styles/accordian/accordian.module.css'; // Assuming you have a CSS file for styling

const Accordion = ({cardData}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  
  return (
    <div className={style.accordian}>
      {cardData && cardData.map((item, index) => (
        <div key={index} className={style.accordianItem}>
          <div
            className={`${style.accordionHeader} ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {item.category_name}

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="7" viewBox="0 0 16 7" fill="none">
            <path d="M16 0.482759L14.2494 -7.65227e-08L8 5.06897L1.75064 -6.22859e-07L-2.1102e-08 0.482758L8 7L16 0.482759Z" fill="black"/>
            </svg>
          </div>
          {index === activeIndex && item.subcategory && item.subcategory.map((item2, index2)=>(
            <div className={style.accordionContent}>{item2.subcategory_name}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

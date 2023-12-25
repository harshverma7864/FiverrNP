import React from 'react'

function Brief3({formData}) {
    /* structure of formData
    { title: '',
      description: '',
      category: '',
      industry: '',
      websiteType: '',
      expertise: '',
      image: file,
      budget: 0,
      isBudgetFlexible: false,
      deliveryDate: Date() } */

  return (
    <div className='brief3-main-div' style={{width: "100%", height: "50rem"}}>
        <p className='title'>title: {formData.title}</p>
        <p className='description'>description: {formData.description}</p>
        <p className='industry'>industry: {formData.industry}</p>
        <p className='web-type'>website type: {formData.websiteType}</p>
        <p className='expertise'>expertise: {formData.expertise}</p>
        {formData.image && 
        <img 
            src={formData.image} 
            className='image' 
            alt={formData.title} 
            style={{maxWidth: "50rem", maxHeight: "50rem"}}
        />}
        <p className='budget'>budget: {formData.budget}</p>
        <p className='flexible-budget'>
            budget is 
            {(formData.isBudgetFlexible)? " flexible" : " not flexible"}
        </p>  
        <p className='delivery-date'>delivery date: {formData.deliveryDate}</p>
    </div>
  )
}

export default Brief3
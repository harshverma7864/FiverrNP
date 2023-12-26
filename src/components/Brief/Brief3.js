import React from 'react'
import "../../assets/styles/Brief/berif3.css";

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
    <div className="brief-main-component">

     <div className="brief-subtitle">
        <h2>Ready to review your brief?</h2>
        <h4>We'll match your brief to select sellers-who'll then send offers to your inbox.</h4>
      </div>

<div className='brief3-component'>

<div className='brief3-brief-main'>
  <h3>Brief summary</h3>
  <span>Edit</span>
</div>

<div class="horizontal-line"></div>

        <p className='title-brief'><span>Title: </span>
        <span className='brief-data'>{formData.title}</span></p>
        <p className='description'><span>description: </span>
        <span className='brief-data'>{formData.description}</span></p>
        <p className='industry'><span>industry: </span>
        <span className='brief-data'>{formData.industry}</span></p>
        <p className='web-type'><span>website type: </span>
        <span className='brief-data'>{formData.websiteType}</span></p>
        <p className='expertise'><span>expertise: </span>
        <span className='brief-data'>{formData.expertise}</span></p>
        <p className='attchment-img'>
        <span>Attachments:</span>
        {formData.image && 
        <img 
            src={formData.image} 
            className='image' 
            alt={formData.title} 
            style={{maxWidth: "50rem", maxHeight: "50rem"}}
        />}</p>

<div className='brief3-brief-main'>
  <h3>Budget & timeline</h3>
  <span>Edit</span>
</div>
<div class="horizontal-line"></div>

        <p className='budget'><span>budget: </span>
        <span className='brief-data'>{formData.budget}</span></p>
        <p className='flexible-budget'>
           <span> budget is </span>
           <span className='brief-data'> 
            {(formData.isBudgetFlexible)? " flexible" : " not flexible"}
           </span>
        </p>  
        <p className='delivery-date'><span>delivery date:</span> 
        <span className='brief-data'>{formData.deliveryDate}</span></p>
        </div>

        
      <button className="brief1-btn" >
      Submit
      </button>
    </div>

    
  )
}

export default Brief3 
import React from 'react';
import "../../assets/styles/Brief/berif3.css";
import axiosInstance from '../../utils/axios';

function Brief3({ formData }) {

  const formatDateForBackend = (dateString) => {
    const parts = dateString.split('/');
    
    // Check if the date string is in the expected format (month/day/year)
    if (parts.length === 3) {
      const [month, day, year] = parts.map(Number);
      
      // Create a new Date object with switched year/month/day
      const formattedDate = new Date(year, month - 1, day);

      // Format date as 'year-month-day'
      const isoFormattedDate = formattedDate.toISOString().split('T')[0];
      
      return isoFormattedDate;
    } else {
      // Handle the case where date is not in the expected format
      console.error('Invalid date format:', dateString);
      return null; // or return a default value or handle as needed
    }
  };


  const mapFieldsForBackend = () => {
    // Map frontend form fields to backend fields
    return {
      title: formData.title,
      description: formData.description,
      subsub_category: formData.category,
      industry: formData.industry,
      project_type: formData.websiteType,
      seller_expertise: formData.expertise,
      attachment: formData.image,
      quote_amount: formData.budget,
      extras: "HTML RESPONSIVE",
      // backendIsBudgetFlexible: formData.isBudgetFlexible,
      exp_del_date: formatDateForBackend(formData.deliveryDate), // Format delivery date
    };
  };

  const handleSubmit = async () => {
    try {
      const backendFormData = mapFieldsForBackend();
  
      if (backendFormData.attachment) {
        const formData = new FormData();
  
        // Append other fields to FormData
        Object.keys(backendFormData).forEach((key) => {
          if (key !== 'attachment' && backendFormData[key] !== null) {
            formData.append(key, backendFormData[key]);
          }
        });
  
        // Append the attachment only if it's a valid File object
        if (backendFormData.attachment instanceof File) {
          formData.append('attachment', backendFormData.attachment);
        }
  
        // Make API request using Axios
        const response = await axiosInstance.post('request-project/quote/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log('API Response:', response.data);
        // Handle the response as needed
      } else {
        console.error('Error submitting data: Attachment is missing or not a valid File object');
      }
    } catch (error) {
      // Handle errors
      console.error('Error submitting data:', error);
    }
  };

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

        {/* Displaying form data */}
        <p className='title-brief'><span>Title: </span>
          <span className='brief-data'>{formData.title}</span></p>
        <p className='description'><span>Description: </span>
          <span className='brief-data'>{formData.description}</span></p>
        <p className='industry'><span>Industry: </span>
          <span className='brief-data'>{formData.industry}</span></p>
        <p className='web-type'><span>Website type: </span>
          <span className='brief-data'>{formData.websiteType}</span></p>
        <p className='expertise'><span>Expertise: </span>
          <span className='brief-data'>{formData.expertise}</span></p>
        <p className='attchment-img'>
          <span>Attachments:</span>
          {formData.image &&
            <img
            type = "file"
              src={formData.image}
              className='image'
              alt={formData.title}
              style={{ maxWidth: "50rem", maxHeight: "50rem" }}
            />}
        </p>

        <div className='brief3-brief-main'>
          <h3>Budget & timeline</h3>
          <span>Edit</span>
        </div>
        <div class="horizontal-line"></div>

        {/* Displaying budget and timeline */}
        <p className='budget'><span>Budget: </span>
          <span className='brief-data'>{formData.budget}</span></p>
        <p className='flexible-budget'>
          <span>Budget is </span>
          <span className='brief-data'>
            {(formData.isBudgetFlexible) ? " flexible" : " not flexible"}
          </span>
        </p>
        <p className='delivery-date'><span>Delivery date:</span>
          <span className='brief-data'>{formData.deliveryDate}</span></p>

      </div>

      <button className="brief1-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Brief3;

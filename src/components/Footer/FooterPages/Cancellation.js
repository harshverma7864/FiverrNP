import React from 'react';
import "../../../styles/footer/footerPages/Cancellation.css";

function CancellationRefundPolicy ()  {
  return (
    <div className="cancellation-refund-container">
    <div className="cancellation-refund-policy">
      <h2 className='cancellation'>Cancellation Policy:</h2>
      <p className='cancellation'>
        <strong>Cancellation Time Frame:</strong> Customers may cancel their order or service within 24 hours of purchase without incurring any cancellation fees. The cancellation facility will only be applicable for the Ice Breaker and Resume Builder Services assuming they have not availed the service. Customers cannot cancel the Coach Connect session once booked. Post the initial 24-hour period cancellation will not be allowed for any of the services.
      </p>
      <p className='cancellation'>
        <strong>Cancellation Procedure:</strong> To cancel an order or service, customers must contact our customer support team at <a href="mailto:info@aicansell.com">info@aicansell.com</a> with their order number and reason for cancellation.
      </p>
  
      <h2 className='cancellation'>Refund Eligibility:</h2>
      <p>Full refunds will be issued for cancellations made within the specified time frame.</p>

      <h2 className='cancellation'>Refund Policy:</h2>
      <p className='cancellation'>
        <strong>Refund Processing Time:</strong> Refunds will be processed within 7 business days of receiving the cancellation request. The actual time it takes for the refund to reflect in the customer's account may vary depending on the payment method and financial institution.
      </p>
      <p className='cancellation'>
        <strong>Refund Method:</strong> Refunds will be issued in the same form as the original payment. For example, if the purchase was made with a credit card, the refund will be credited back to that credit card.
      </p>
      <p className='cancellation'>
        <strong>Refund Exceptions:</strong> No refunds will be provided for services already utilized. Refunds will not be issued if the customer has already used a service.
      </p>

      <h2 className='cancellation'>Contact Information:</h2>
      <p className='cancellation'>For any inquiries regarding cancellations or refunds, please contact our customer support team at <a className= "cancellation" href="mailto:info@aicansell.com">info@aicansell.com</a>.</p>
    </div>
    </div>
  );
};

export default CancellationRefundPolicy;

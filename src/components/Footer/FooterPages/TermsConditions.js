import React from 'react';
import '../../../styles/footer/footerPages/TermsConditions.css';
import { useNavigate } from 'react-router-dom';

function TermsAndConditions () {
    const navigate = useNavigate();

    const handlePrivacyPage = () => {
        navigate('/privacypolicy');
    }

  return (
    <div className="termsandconditions-container">
      <div className="terms-and-conditions">
        <h2 className="termsandconditions">Terms and Conditions</h2>

        <p className="termsandconditions">
          <strong>1. Acceptance of Terms</strong>
          By accessing and using this website/application, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use this website/application.
        </p>

        <p className="termsandconditions">
          <strong>2. Use of the Website/Application</strong>
          <br />
          a. You agree to use this website/application for lawful purposes only and in a manner consistent with all applicable laws and regulations.
          <br />
          b. Unauthorised use of this website/application may give rise to a claim for damages and/or be a criminal offence.
        </p>

        <p className="termsandconditions">
          <strong>3. Intellectual Property</strong>
          <br />
          a. All content on this website/application, including text, graphics, logos, images, audio clips, and software, is the property of Pecai Technologies Pvt. Ltd. or its content suppliers and is protected by international copyright laws.
          <br />
          b. You may not reproduce, modify, distribute, transmit, display, perform, reproduce, transfer, sell, or otherwise use any content without the express written consent of Pecai Technologies Pvt. Ltd.
        </p>

        <p className="termsandconditions">
          <strong>4. Privacy Policy</strong>
          <br />
          a. Your use of this website/application is also governed by our Privacy Policy, which is incorporated by reference into these Terms and Conditions.
          <br />
          b.
          <span
                className="privacy-link"  // Use a different class name here
                onClick={handlePrivacyPage}
            >
               Click Here and Go Privacy Policy Page.
            </span>
        </p>

        <p className="termsandconditions">
          <strong>5. User Accounts</strong>
          <br />
          a. If you create an account on this website/application, you are responsible for maintaining the confidentiality of your account and password.
          <br />
          b. Pecai Technologies Pvt. Ltd. reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders at its sole discretion.
        </p>

        <p className="termsandconditions">
          <strong>6. Disclaimer of Liability</strong>
          <br />
          a. The information on this website/application is provided on an "as-is" basis. Pecai Technologies Pvt. Ltd. makes no representations or warranties of any kind, express or implied, as to the accuracy, completeness, suitability, or availability of the information contained on this website/application.
          <br />
          b. Your use of any information or materials on this website/application is entirely at your own risk, for which Pecai Technologies shall not be liable.
        </p>

        <p className="termsandconditions">
          <strong>7. Modifications</strong>
          <br />
          Pecai Technologies Pvt. Ltd. may revise these Terms and Conditions at any time without notice. By using this website/application, you agree to be bound by the current version of these Terms and Conditions.
        </p>

        <p className="termsandconditions">
          <strong>8. Governing Law</strong>
          <br />
          These Terms and Conditions are governed by and construed in accordance with the laws of Gurugram, Haryana, India, and you irrevocably submit to the exclusive jurisdiction of the courts in the above-mentioned location.
        </p>

        <h2 className="termsandconditions">Contact Information:</h2>
        <p className="termsandconditions">If you have any questions about these Terms and Conditions, please contact us at <a className= "termsandconditions" href="mailto:info@aicansell.com">info@aicansell.com</a>.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

import { useState } from 'react';

const useInfoLogic = () => {
  
    const [formState, setFormState] = useState({
        personalDetails: {
          profilePicture: '',
          displayName: '',
          description: '',
          languages: [],
        },
        professionalDetails: {
          occupation: '',
          skills: [],
          education: [],
          certifications: [],
          personalWebsite: '',
        },
        accountSecurity: {
          email: {
            value: '',
            verified: false,
          },
          phone: '',
        },
      });
    
      const [active, setActive] = useState(1);
    
      // Handle input changes for personal details section
      const handlePersonalDetailsChange = (field, value) => {
        setFormState((prevState) => ({
          ...prevState,
          personalDetails: {
            ...prevState.personalDetails,
            [field]: value,
          },
        }));
      };
    
      // Handle input changes for professional details section
      const handleProfessionalDetailsChange = (section, field, value) => {
        setFormState((prevState) => ({
          ...prevState,
          professionalDetails: {
            ...prevState.professionalDetails,
            [section]: [
              ...prevState.professionalDetails[section],
              { [field]: value },
            ],
          },
        }));
      };
    
      // Handle input changes for account security section
      const handleAccountSecurityChange = (field, value) => {
        setFormState((prevState) => ({
          ...prevState,
          accountSecurity: {
            ...prevState.accountSecurity,
            [field]: value,
          },
        }));
      };
    
      const handleAddButtonClick = (section, field, value) => {
        if (value.trim() !== '') {
          setFormState((prevState) => ({
            ...prevState,
            professionalDetails: {
              ...prevState.professionalDetails,
              [section]: [
                ...prevState.professionalDetails[section],
                { [field]: value },
              ],
            },
          }));
        }
      };
    
      // Handle "Okay" button click for professional details section
      const handleOkayButtonClick = (section) => {
        // Merge the temporary list with the main list in the form data
        setFormState((prevState) => ({
          ...prevState,
          professionalDetails: {
            ...prevState.professionalDetails,
            [section]: [
              ...prevState.professionalDetails[section],
              ...prevState.tempList,
            ],
          },
          tempList: [], // Clear the temporary list
        }));
      };

  return {
  };
};

export default useNavbarLogic;
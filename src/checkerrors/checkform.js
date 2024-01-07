import React, { useState } from "react";
import axiosInstance from "../utils/axios";

const CheckForm = () => {
  const [formData, setFormData] = useState({
    country: "",
    description: "",
    language_proficiency: [],
    skills: [],
    education: [],
    certifications: [],
    display_name: "",
    occupation: "",
    expertise: "", // comma-separated string of subsubcategory values
    personal_website: "",
  });

  const setFormDataArray = (fieldName, index, key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: prevFormData[fieldName].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use your API endpoint
      const apiUrl = "accounts/seller/";
      const response = await axiosInstance.post(apiUrl, formData);

      console.log("API Response:", response.data);
      // Handle success or redirect as needed
    } catch (error) {
      console.error("Error sending data to API:", error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Country */}
      <label>
        Country:
        <input
          type="text"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
      </label>

      {/* Description */}
      <label>
        Description:
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </label>

      {/* Language Proficiency */}
      <label>
        Language Proficiency:
        {formData.language_proficiency.map((lang, index) => (
          <div key={index}>
            <input
              type="text"
              value={lang.language}
              onChange={(e) => setFormDataArray('language_proficiency', index, 'language', e.target.value)}
            />
            <input
              type="text"
              value={lang.proficiency}
              onChange={(e) => setFormDataArray('language_proficiency', index, 'proficiency', e.target.value)}
            />
          </div>
        ))}
      </label>

      {/* Skills */}
      <label>
        Skills:
        {formData.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill.skill}
              onChange={(e) => setFormDataArray('skills', index, 'skill', e.target.value)}
            />
            <input
              type="text"
              value={skill.experience}
              onChange={(e) => setFormDataArray('skills', index, 'experience', e.target.value)}
            />
          </div>
        ))}
      </label>

      {/* Education */}
      <label>
        Education:
        {formData.education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              value={edu.country}
              onChange={(e) => setFormDataArray('education', index, 'country', e.target.value)}
            />
            {/* Add other education fields as needed */}
          </div>
        ))}
      </label>

      {/* Certifications */}
      <label>
        Certifications:
        {formData.certifications.map((cert, index) => (
          <div key={index}>
            <input
              type="text"
              value={cert.name}
              onChange={(e) => setFormDataArray('certifications', index, 'name', e.target.value)}
            />
            {/* Add other certification fields as needed */}
          </div>
        ))}
      </label>

      {/* Display Name */}
      <label>
        Display Name:
        <input
          type="text"
          value={formData.display_name}
          onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
        />
      </label>

      {/* Occupation */}
      <label>
        Occupation:
        <input
          type="text"
          value={formData.occupation}
          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
        />
      </label>

      {/* Expertise */}
      <label>
        Expertise (comma-separated):
        <input
          type="text"
          value={formData.expertise}
          onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
        />
      </label>

      {/* Personal Website */}
      <label>
        Personal Website:
        <input
          type="text"
          value={formData.personal_website}
          onChange={(e) => setFormData({ ...formData, personal_website: e.target.value })}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckForm;

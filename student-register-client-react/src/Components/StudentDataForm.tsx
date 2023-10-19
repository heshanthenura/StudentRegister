import React, { useState } from "react";
import "./form.css";
const StudentDataForm = ({ onAddData }: any) => {
  const [formData, setFormData] = useState({
    index: "",
    name: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const apiUrl = "http://localhost:8080/addBasicDetails"; // Replace with your API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Data submitted successfully");
        onAddData(formData); // Call the callback to update the UI
        setFormData({ index: "", name: "" });
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="form-heading">Add Student Details</h1>
      <div className="input-wrap">
        <input
          type="text"
          name="index"
          id="index"
          placeholder="Enter Index Number"
          value={formData.index}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Student Name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <input type="submit" value="ADD DATA" />
    </form>
  );
};

export default StudentDataForm;

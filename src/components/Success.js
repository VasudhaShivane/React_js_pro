// src/components/Success.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    navigate('/');
    return null;
  }

  return (
    <div className="success-container">
      <h2>Form Submission Successful</h2>
      <div>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone Number:</strong> {formData.phoneNo}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>PAN No.:</strong> {formData.panNo}</p>
        <p><strong>Aadhar No.:</strong> {formData.aadharNo}</p>
      </div>
    </div>
  );
}

export default Success;

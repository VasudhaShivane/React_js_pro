import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [activeField, setActiveField] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
        if (!value) error = 'First Name is required';
        break;
      case 'lastName':
        if (!value) error = 'Last Name is required';
        break;
      case 'username':
        if (!value) error = 'Username is required';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 6) error = 'Password must be at least 6 characters';
        break;
      case 'phoneNo':
        if (!value) error = 'Phone Number is required';
        else if (!/^\+\d{1,3}-\d{7,12}$/.test(value)) error = 'Phone Number is invalid';
        break;
      case 'country':
        if (!value) error = 'Country is required';
        break;
      case 'city':
        if (!value) error = 'City is required';
        break;
      case 'panNo':
        if (!value) error = 'PAN No. is required';
        else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) error = 'PAN No. is invalid';
        break;
      case 'aadharNo':
        if (!value) error = 'Aadhar No. is required';
        else if (!/^\d{12}$/.test(value)) error = 'Aadhar No. is invalid';
        break;
      default:
        break;
    }
    return error;
  };

  const validateForm = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) tempErrors[key] = error;
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === activeField) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleFocus = (e) => {
    setActiveField(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {activeField === 'firstName' && errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {activeField === 'lastName' && errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {activeField === 'username' && errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {activeField === 'email' && errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          /><br></br>
          <center><button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
          </center>
          {activeField === 'password' && errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Phone Number (format: +country_code-number)</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {activeField === 'phoneNo' && errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
        </div>
        <div>
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="South Korea">South Korea</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {activeField === 'country' && errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div>
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="New York">New York</option>
            <option value="Toronto">Toronto</option>
          </select>
          {activeField === 'city' && errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div>
          <label>PAN No.</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {activeField === 'panNo' && errors.panNo && <span className="error">{errors.panNo}</span>}
        </div>
        <div>
          <label>Aadhar No.</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {activeField === 'aadharNo' && errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
        </div>
        <center><button type="submit" disabled={!isFormValid}>
          Submit
        </button>
        </center>
        
      </form>
    </div>
  );
}

export default Form;

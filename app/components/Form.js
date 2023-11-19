"use client"
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    gender: '',
    address: '',
    city: '',
    pinCode: '',
    state: '',
    country: '',
    qualification: '',
    courses: ''
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Optionally, you can redirect to the Mcq component or perform other actions here
    window.location.href = "/Mcq";
  };

  return (
    <>
      <form className='m-5' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder="Enter your First Name" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" name="lastName" placeholder="Enter your Last Name" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" placeholder="eg: register@gmail.com" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={handleChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input type="text" placeholder="Enter your Phone Number" className="form-control" id="mobileNumber" name="mobileNumber" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <label className="form-check-label" htmlFor="maleRadio">
              <input type="radio" value="Male" name="gender" id="maleRadio" onChange={handleChange} />Male
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="femaleRadio">
              <input type="radio" value="Female" name="gender" id="femaleRadio" onChange={handleChange} />Female
            </label>
          </div>
        </div>


        <div className="mb-3 mt-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" placeholder="Enter your Address" className="form-control" id="address" name="address" onChange={handleChange} />
        </div>

        
        <div className="mb-3 mt-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" placeholder="Enter your City" className="form-control" id="city" name="city" onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="pinCode" className="form-label">Pin Code</label>
          <input type="text" placeholder="Enter your PinCode" className="form-control" id="pinCode" name="pinCode" onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" placeholder="Enter your City" className="form-control" id="state" name="state" onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="country" className="form-label">Country</label>
          <input type="text" placeholder="Enter your City" className="form-control" id="country" name="country" onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="qualification" className="form-label">Qualification</label>
          <input type="text" placeholder="Enter your Qualification" className="form-control" id="qualification" name="qualification" onChange={handleChange} />
        </div>


        <div className="mb-3">
          <label className="form-label">Courses Interested</label>
          <div className="form-check">
            <label className="form-check-label" htmlFor="aiRadio">
              <input type="radio" value="Artificial" name="courses" id="aiRadio" onChange={handleChange} />Artificial Intelligent
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="dmRadio">
              <input type="radio" value="Digital Marketing" name="courses" id="dmRadio" onChange={handleChange} />Digital Marketing
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="AnimationRadio">
              <input type="radio" value="Animation" name="courses" id="AnimationRadio" onChange={handleChange} />Animation
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="FinancialRadio">
              <input type="radio" value="Financial accounting with BI / SAP " name="courses" id="FinancialRadio" onChange={handleChange} />Financial accounting with BI / SAP 
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="SoftwareRadio">
              <input type="radio" value="oftware development with PYTHON " name="courses" id="SoftwareRadio" onChange={handleChange} />Software development with PYTHON 
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="WebRadio">
              <input type="radio" value="Web designing / app designing " name="courses" id="WebRadio" onChange={handleChange} />Web designing / app designing 
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="DataRadio">
              <input type="radio" value="Data analytics" name="courses" id="DataRadio" onChange={handleChange} />Data analytics
            </label>
          </div>

        </div>

         {/* More form fields ... */}


        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}


export default Form;



import React from 'react';
import "../../css/TImePass.css";
import logo from "../../images/logo.png";

const TImePass = ()=>{

    return (
        // Container
        <div className='container'>
    
        {/* NavBar  */}
    
        <nav className="navbar">
            <div className="col-md-4">
                {/* Add home url link here */}
            <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="80" height="80" className="d-inline-block align-text-center" />
    
            </a>    
            </div>
            <div className="col-md-4">
            
            <h2 className='main_header'>Employee Details</h2>
            </div>
            <div className="col-md-4"> </div>
    
        
      
        </nav>
    
        {/* Form starts */}
            <form className="row g-3">
    
      {/* ID */}
      <div className="col-md-6">
        <label for="empId" className="form-label">Employee ID</label>
        <input type="number" readOnly className="form-control" id="empId" />
      </div>
    
    {/* First Name */}
      <div className="col-md-6">
        <label for="fName" className="form-label">First Name</label>
        <input type="text" readOnly className="form-control" id="fName" />
      </div>
    
      {/* Last Name */}
      <div className="col-md-6">
        <label for="lName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lName" />
      </div>
    
    {/* Email */}
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      
      {/* Phone number */}
      <div className="col-md-6">
        <label for="phone_no" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="phone_no" />
      </div>
    
        {/* Role */}
        <div className="col-md-6">
        <label for="role" className="form-label">Role</label>
        <input type="text" className="form-control" id="role" />
      </div>
    
      {/* Date of Birth */}
      <div className="col-md-6">
        <label for="dob" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="dob" />
      </div>
    
    
      {/* Hiring Date */}
      <div className="col-md-6">
        <label for="hiringDate" className="form-label">Hiring Date</label>
        <input type="date" className="form-control" id="hiringDate" />
      </div>
    
      {/* Salary */}
      <div className="col-md-6">
      <label for="salary" className="form-label">Salary</label>
        <input type="number" className="form-control" id="salary" />
      </div>
    
      {/* Blank div */}
      <div>
    
      </div>
    
      
    <div className="col-md-4"></div>
    
      {/* Back to list */}
      <div className="col-md-4">
      <button type="button" className="btnx btn-secondary">Back to list</button>  </div>
    
      <div className="col-md-4"></div>
    
    </form>
            
        </div>
      )

}

export default TImePass;
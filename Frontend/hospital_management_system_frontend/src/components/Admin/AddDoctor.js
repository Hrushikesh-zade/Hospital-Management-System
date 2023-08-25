import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import doctorService from "../../services/employeeService";
import logo from "../../images/logo.png"




const AddDoctor = () => {

    const navigate = useNavigate();



//     "firstName": "string",
//   "lastName": "string",
//   "email": "string",
//   "password": "string",
//   "confirmPassword": "string",
//   "role": "ADMIN",
//   "dob": "2023-08-20",
//   "gender": "MALE",
//   "contactNo": 0,
//   "hiringDate": "2023-08-20",
//   "salary": 0,
//   "charges": 0


const [employeeDetails,setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "12345",
    confirmPassword: "12345",
    role: "DOCTOR",
    dob: "",
    gender: "",
    contactNo: "",
    hiringDate: "",
    salary: "",
    charges: ""
    });

    const handleChange = (key, value) => {
        // console.log(value)
        setEmployeeDetails({ ...employeeDetails, [key]: value });
      };
    
      function saveTheEmployee() {
        console.log(employeeDetails);
        doctorService
          .create(employeeDetails)
          .then((resp) => {
            navigate("/admin");
          })
          .catch((err) => {
            console.log("some error occured" + err);
          });
      }

    return (
        // Container --------------
      <div className='container'>

        {/* NavBar  --------------*/}

    <nav className="navbar">
        <div className="col-md-4">
            {/* Add home url link here */}
        <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" width="80" height="80" className="d-inline-block align-text-center" />
        </a>    
        </div>
        <div className="col-md-4">
        
        <h2 className='main_header'>Add Doctor Details</h2>
        </div>
        <div className="col-md-4"> </div>
    </nav>

          {/* Form starts */}
        <form className="row g-3">
          {/* First Name */}
            <div className="col-md-6">
              <label for="fName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="fName" value={employeeDetails.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)} />
            </div>

        {/* Last Name */}
          <div className="col-md-6">
            <label for="lName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lName" 
            value={employeeDetails.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}/>
          </div>
        
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" 
            value={employeeDetails.email}
            onChange={(e) => handleChange("email", e.target.value)}/>
          </div>
        
          {/* Phone number */}
          <div className="col-md-6">
            <label for="phone_no" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="phone_no"
             value={employeeDetails.contactNo}
             onChange={(e) => handleChange("contactNo", e.target.value)} />
          </div>
        
          {/* Date of Birth */}
          <div className="col-md-6">
            <label for="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" 
            value={employeeDetails.dob}
            onChange={(e) => handleChange("dob", e.target.value)} />
          </div>


            {/* Date of Admission */}
          <div className="col-md-6">
            <label for="doa" className="form-label">Date of Hiring</label>
            <input type="date" className="form-control" id="doa"
            value={employeeDetails.hiringDate}
            onChange={(e) => handleChange("hiringDate", e.target.value)} />
          </div>
        

          {/*  Salary */}
          <div className="col-md-4">
            <label for="sal" className="form-label">Enter Salary</label>
            <input type="text" className="form-control" id="sal"
             value={employeeDetails.salary}
             onChange={(e) => handleChange("salary", e.target.value)} />
          </div>


          {/* Gender */}
          <div className="col-md-4">
            <label for="gender" className="form-label">Gender </label>
            <select id="gender" className="form-select"
            value={employeeDetails.gender}
            onChange={(e) => handleChange("gender", e.target.value)} >
              <option selected>--Select--</option>
                  <option  value="MALE">MALE</option>
                  <option  value="FEMALE">FEMALE</option>
                  <option  value="OTHER">OTHER</option>    </select>
          </div>


          {/*  Charges */}
          <div className="col-md-4">
            <label for="charges" className="form-label">Enter Charges</label>
            <input type="number" className="form-control" id="charges" 
            value={employeeDetails.charges}
            onChange={(e) => handleChange("charges", e.target.value)}/>
          </div>


         {/* Add Patient button */}
          <div className="col-6">
            <button type="button" className="btn btn-primary" onClick={saveTheEmployee}>Submit Details</button>
          </div>

          {/* Back to list */}
          <div className="col-6">
            <Link to="/admin" className="btn btn-secondary">Back to List</Link>
          </div>
          
    </form>
    </div>
    );
}

export default AddDoctor;
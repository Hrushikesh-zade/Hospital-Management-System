import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import employeeService from "../../services/employeeService";


const AddEmployee = () => {

    const navigate = useNavigate();



const [employeeDetails,setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "12345",
    confirmPassword: "12345",
    role: "",
    dob: "",
    gender: "",
    contactNo: "",
    hiringDate: "",
    salary: ""
    });

    const handleChange = (key, value) => {
        // console.log(value)
        setEmployeeDetails({ ...employeeDetails, [key]: value });
      };
    
      function saveTheEmployee() {
        console.log(employeeDetails);
        employeeService
          .create(employeeDetails)
          .then((resp) => {
            navigate("/admin");
          })
          .catch((err) => {
            console.log("some error occured" + err);
          });
      }

    return (
        <div>
        <label>Enter firstname</label>
        <input
          value={employeeDetails.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
        <br />
        
        <label>Enter lastname</label>
        <input
          value={employeeDetails.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
        <br />
        <label>Enter email</label>
        <input
          value={employeeDetails.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {/* <br />
        <label>Enter Password</label>
        <input
          value={employeeDetails.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <br />
        <label>Enter Confirm Password</label>
        <input
          value={employeeDetails.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        /> */}
        <br />
        
        <label>Enter phone_no</label>
        <input
          value={employeeDetails.contactNo}
          onChange={(e) => handleChange("contactNo", e.target.value)}
        />
        <br />

        <label>Enter DOB</label>
        <input
          type="date"
          value={employeeDetails.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
        />
        <br />
        
        <br />
        <label>Enter Date_Of_Hiring</label>
        <input
          type="date"
          value={employeeDetails.hiringDate}
          onChange={(e) => handleChange("hiringDate", e.target.value)}
        />


        <br />
        <label>Enter Salary</label>
        <input
          type="number"
          value={employeeDetails.salary}
          onChange={(e) => handleChange("salary", e.target.value)}
        />

        <br />
    
      <br/>
      <label>Enter Gender </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={employeeDetails.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
      >       <option >Select gender </option>
          <option  value="MALE">MALE</option>
          <option  value="FEMALE">FEMALE</option>
          <option  value="OTHER">OTHER</option>
                
      </select>
      
      <br/>
      <label>Enter Role </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={employeeDetails.role}
        onChange={(e) => handleChange("role", e.target.value)}
      >       <option >Select role </option>
          <option  value="ADMIN">ADMIN</option>
          <option  value="RECEPTIONIST">RECEPTIONIST</option>
          <option  value="ACCOUNTANT">ACCOUNTANT</option>
                
      </select>


      {/* <Practise2></Practise2> */}

      <button className="btn btn-primary" onClick={saveTheEmployee}>
        {" "}
        submit details
      </button>

      <Link to="/admin" className="btn btn-secondary">
        Back to List
      </Link>
      <br/>
      <br/>
      <br/>
    </div>
    );
}

export default AddEmployee;
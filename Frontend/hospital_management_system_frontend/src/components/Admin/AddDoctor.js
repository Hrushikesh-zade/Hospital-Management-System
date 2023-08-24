import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import doctorService from "../../services/doctorService";


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
    charges: "",
    status: "ACTIVE"
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
            navigate(-1);
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
        <label>Enter Charges</label>
        <input
          type="number"
          value={employeeDetails.charges}
          onChange={(e) => handleChange("charges", e.target.value)}
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


      {/* <Practise2></Practise2> */}

      <button className="btn btn-primary" onClick={saveTheEmployee}>
        {" "}
        submit details
      </button>

      {/* <Link to="/admin" className="btn btn-secondary">
        Back to List
      </Link> */}

<button className="btn btn-secondary" onClick={()=>{
        navigate(-1);
      }}>
Back to List
      </button>
      <br/>
      <br/>
      <br/>
    </div>
    );
}

export default AddDoctor;
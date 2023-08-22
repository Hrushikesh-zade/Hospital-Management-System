import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeService from "../../services/employeeService";


const EditEmployee = () => {


    const navigate = useNavigate();
    const { id } = useParams();
    const [employeeDetails,setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    dob: "",
    gender: "",
    contactNo: "",
    hiringDate: "",
    salary: ""
    });
    

    useEffect(() => {
        getEmployeeDetail(id);   
      }, []);


    function getEmployeeDetail(employeeId) {
        employeeService
          .get(employeeId)
          .then((resp) => {
            setEmployeeDetails(resp.data);
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error + "error occured");
          });
      }


      const handleChange = (key, value) => {
        // console.log(value)
        // console.log(addpatient.firstName)
        setEmployeeDetails({ ...employeeDetails, [key]: value });
      };
    
      function saveTheEmployee() {
        employeeService
          .update(id,employeeDetails)
          .then((resp) => {
            navigate("/admin");
          })
          .catch((err) => {
            console.log("some error occured");
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
      <br />
      <label>Enter Gender</label>
      <input
        value={employeeDetails.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
      />
      <br />
      <label>Enter phone_no</label>
      <input
        value={employeeDetails.contactNo}
        onChange={(e) => handleChange("contactNo", e.target.value)}
      />
      <br />
      <label>Enter Role</label>
      <input
        value={employeeDetails.role}
        onChange={(e) => handleChange("role", e.target.value)}
      />
      <br />
      <label>Enter DOB</label>
      <input
        type="date"
        value={employeeDetails.dob}
        onChange={(e) => handleChange("dob", e.target.value)}
      />
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
        value={employeeDetails.salary}
        onChange={(e) => handleChange("salary", e.target.value)}
      />
      <br />
      <button className="btn btn-primary" onClick={saveTheEmployee}>
        {" "}
        submit details
      </button>

      <Link to="/admin" className="btn btn-secondary">
        Back to List
      </Link>
    </div>
    );
}

export default EditEmployee;
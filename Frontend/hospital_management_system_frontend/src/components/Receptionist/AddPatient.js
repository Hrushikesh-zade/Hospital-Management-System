import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import patientService from "../../services/patient.service";

// import Practise2 from "./Practise2";
import doctorService from "../../services/doctorService";
import wardService from "../../services/wardService";
const AddPatient = () => {
  const navigate = useNavigate();
  const [addpatient, setaddPatient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfAdmission: "",
    bloodGroup: "",
    dob: "",
    gender: "",
    role: "PATIENT",
    doctorId: "",
    wardId: "",
    disease: "",
    paymentStatus: "NOTPAID",
    contactNo: "",
    prescription: "",
    password: "12345",
    confirmPassword: "12345",
    status: "ACTIVE"
  });

  const [doctorList, setDoctorList] = useState([]);
  const [wardList, setWardList] = useState([]);

  useEffect(() => {
    getAllDoctors();
    getAllWards();
  }, []);

  function getAllDoctors() {
    doctorService
      .getAll()
      .then((resp) => {
        console.log(resp.data);
        setDoctorList(resp.data);
      })
      .catch((err) => {});
  }
  function getAllWards() {
    wardService
      .getAll()
      .then((resp) => {
        console.log(resp.data);
        setWardList(resp.data);
      })
      .catch((err) => {});
  }

  const handleChange = (key, value) => {
    // console.log(value)
    setaddPatient({ ...addpatient, [key]: value });
  };

  function saveThePatient() {
    console.log(addpatient);
    patientService
      .create(addpatient)
      .then((resp) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("some error occured");
      });
  }



  return (
    <div>
      

      <div>
        <label>Enter firstname</label>
        <input
          value={addpatient.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
        <br />
        
        <label>Enter lastname</label>
        <input
          value={addpatient.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
        <br />
        <label>Enter email</label>
        <input
          value={addpatient.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <br />
        
        <label>Enter phone_no</label>
        <input
          value={addpatient.contactNo}
          onChange={(e) => handleChange("contactNo", e.target.value)}
        />
        <br />

        <label>Enter DOB</label>
        <input
          type="date"
          value={addpatient.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
        />
        <br />
        {/* <label>Enter Bed_Alloted</label>
        <input
          value={addpatient.Bed_Alloted}
          onChange={(e) => handleChange("Bed_Alloted", e.target.value)}
        />
        <br /> */}
        <br />
        <label>Enter Date_Of_Admission</label>
        <input
          type="date"
          value={addpatient.dateOfAdmission}
          onChange={(e) => handleChange("dateOfAdmission", e.target.value)}
        />
        <br />
        <label>Enter patient symptoms</label>
        <input
          value={addpatient.disease}
          onChange={(e) => handleChange("disease", e.target.value)}
        />
        <br />

        <br />
      </div>

      {/* comment doctor name option bar and send id */}

      <label>Enter Doct_Alloted - list options - send id to backend</label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={addpatient.doctorId}
        onChange={(e) => handleChange("doctorId", e.target.value)}
      >
        <option >Open this select menu</option>

        {doctorList.map((i) => (
          <option key={i.doctorId} value={i.doctorId}>
            {i.firstName} {i.lastName}
          </option>
        ))}
      </select>

      {/* end of doctor */}
      {/* comment ward type option bar and send id */}
      <br />
      <label>Enter ward_id -drop down-send id and show ward type </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={addpatient.wardId}
        onChange={(e) => handleChange("wardId", e.target.value)}
      >
        <option >Select ward </option>

        {wardList.map((j) => (
          <option key={j.wardId} value={j.wardId}>{j.type}</option>
        ))}
      </select>

      {/* end of ward */}

      <br />
      <br />
      <label>Enter bloodGroup </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={addpatient.bloodGroup}
        onChange={(e) => handleChange("bloodGroup", e.target.value)}
      >
        
        <option >Select  bloodGroup </option>
          <option  value="A_POSITIVE">A+</option>
          <option  value="A_NEGATIVE">A-</option>
          <option  value="B_POSITIVE">B+</option>
          <option  value="B_NEGATIVE">B-</option>
          <option  value="AB_POSITIVE">AB+</option>
          <option  value="AB_NEGATIVE">AB-</option>
          <option  value="O_POSITIVE">O+</option>
          <option  value="O_NEGATIVE">O-</option>
        
      </select>
      <br/>
      <label>Enter Gender </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={addpatient.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
      >       <option >Select gender </option>
          <option  value="MALE">MALE</option>
          <option  value="FEMALE">FEMALE</option>
          <option  value="OTHER">OTHER</option>
                
      </select>
      
      <br/>


      {/* <Practise2></Practise2> */}

      <button className="btn btn-primary" onClick={saveThePatient}>
        {" "}
        submit details
      </button>

      <Link to="/" className="btn btn-secondary">
        Back to List
      </Link>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default AddPatient;

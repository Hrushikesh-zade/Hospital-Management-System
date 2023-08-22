import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientService from "../../services/patient.service";
const EditPatient = () => {


  const navigate = useNavigate();
  const { id } = useParams();
  const [addpatient, setaddPatient] = useState({
    firstName: "",
    lastName: "",
    paymentStatus: "",
    email: "",
    dateOfAdmission: "",
    bloodGroup: "",
    dob: "",
    disease: "",
    wardId: "",
    contactNo: "",
    prescription:"",
    gender: ""

  });

  useEffect(() => {
    getPatientDetail(id);
  }, []);

  function getPatientDetail(patientId) {
    patientService
      .get(patientId)
      .then((resp) => {
        setaddPatient(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });
  }

  const handleChange = (key, value) => {
    setaddPatient({ ...addpatient, [key]: value });
  };

  function saveThePatient() {
    patientService
      .update(id,addpatient)
      .then((resp) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("some error occured");
      });
  }

  return (
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
      <label>Enter bloodgrpoup</label>
      <input
        value={addpatient.bloodGroup}
        onChange={(e) => handleChange("bloodGroup", e.target.value)}
      />
      <br />
      <label>Enter phone_no</label>
      <input
        value={addpatient.contactNo}
        onChange={(e) => handleChange("contactNo", e.target.value)}
      />
      <br />
      <label>Enter payStatus</label>
      <input
        value={addpatient.paymentStatus}
        onChange={(e) => handleChange("paymentStatus", e.target.value)}
        readOnly
      />
      <br />
      <label>Enter DOB</label>
      <input
        type="date"
        value={addpatient.dob}
        onChange={(e) => handleChange("dob", e.target.value)}
      />
      <br />
      <label>Enter Disease</label>
      <input
        type="text"
        value={addpatient.disease}
        onChange={(e) => handleChange("disease", e.target.value)}
      />
      <br />
      {/* <label>Enter Bed_Alloted</label>
      <input
        value={addpatient.Bed_Alloted}
        onChange={(e) => handleChange("Bed_Alloted", e.target.value)}
      />
      <br /> */}
      <label>Enter ward_id</label>
      <input
        value={addpatient.wardId}
        onChange={(e) => handleChange("wardId", e.target.value)}
      />
      {/* <br />
      <label>Enter Doct_Alloted</label>
      <input
        value={addpatient.Doct_Alloted}
        onChange={(e) => handleChange("Doct_Alloted", e.target.value)}
      /> */}
      <br />
      <label>Enter Date_Of_Admission</label>
      <input
        type="date"
        value={addpatient.dateOfAdmission}
        onChange={(e) => handleChange("dateOfAdmission", e.target.value)}
      />
      <br />
      {/* <label>Enter patientProblems</label>
      <input
        value={addpatient.patientProblems}
        onChange={(e) => handleChange("patientProblems", e.target.value)}
      />
      <br /> */}

      <button className="btn btn-primary" onClick={saveThePatient}>
        {" "}
        submit details
      </button>

      <Link to="/" className="btn btn-secondary">
        Back to List
      </Link>
    </div>
  );
};

export default EditPatient;

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientService from "../../services/patient.service";
import doctorService from "../../services/doctorService";
const AddPrescription = () => {
  const navigate = useNavigate();
  const { doc_id, pat_id } = useParams();
  const [doctorList, setDoctorList] = useState([]);
  const [edited, setEdited] = useState(false);
  const [doctor, setDoctor] = useState(0);
  const [doctorsAllocated, setDoctorsAllocated] = useState([]);

 // let nav_url = "/doctors/" + doc_id;

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
    prescription: "",
    gender: "",
  });

  useEffect(() => {
    getPatientDetail(pat_id);
    getAllDoctors();
    getDoctorsList(pat_id);
  }, []);

  function getAllDoctors() {
    doctorService
      .getAll()
      .then((resp) => {
        setDoctorList(resp.data);
      })
      .catch((err) => {});
  }

  function getPatientDetail(patientId) {
    patientService
      .get(patientId)
      .then((resp) => {
        setaddPatient(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });

   // nav_url = nav_url + doc_id;
  }

  function saveDoctor(patient_id, doctor_id) {
    doctorService
      .addDoctor(patient_id, doctor_id)
      .then((resp) => {
        console.log("added");
      })
      .catch((err) => {
        console.log("Error:" + err);
      });
  }

  const handleChange = (key, value) => {
    setEdited(true);
    setaddPatient({ ...addpatient, [key]: value });
  };

  function saveThePatient() {
    patientService
      .update(pat_id, addpatient)
      .then((resp) => {
        // navigate(nav_url);
        //console.log("changes made successfully");
      })
      .catch((err) => {
        console.log("some error occured");
      });
  }

  function getDoctorsList(patientId) {
    patientService
      .getAllocatedDoctors(patientId)
      .then((resp) => {
        console.log(resp.data);
        setDoctorsAllocated(resp.data);
      })
      .catch((err) => {
        console.log("some error ocurred in patient details");
      });
  }

  function savePatientDetails() {
    if (edited) {
      saveThePatient();
    }
    if (doctor > 0) {
      saveDoctor(pat_id, doctor);
    }
    navigate(`/doctors/${doc_id}`);
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
      <label>Enter prescription</label>
      <textarea
        value={addpatient.prescription}
        onChange={(e) => handleChange("prescription", e.target.value)}
      />
      <br />
      <label>Enter Gender</label>
      <input
        type="text"
        value={addpatient.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
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
      <br />
      Doctors Allocated are:
      {doctorsAllocated.map((i) => (
        <h3 key={i.doctorId}>{i.firstName} {i.lastName}</h3>
      ))}
      <br />
      <br />
      <label>Enter Doct_Alloted - list options - send id to backend</label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={addpatient.doctorId}
        onChange={(e) => setDoctor(e.target.value)}
      >
        <option>Open this select menu</option>

        {doctorList.map((i) => (
          <option key={i.doctorId} value={i.doctorId}>
            {i.firstName} {i.lastName}
          </option>
        ))}
      </select>
      <br />
      <br />
      <br />
      <button className="btn btn-primary" onClick={savePatientDetails}>
        {" "}
        submit details
      </button>
      <Link to={`/doctors/${doc_id}`} className="btn btn-secondary">
        Back to List
      </Link>
    </div>
  );
};

export default AddPrescription;

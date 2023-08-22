import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import patientService from "../../services/patient.service";
import wardService from "../../services/wardService";

const Invoice = () => {
  const [patientDetails, setPatientDetails] = useState({});

  const [wardDetails, setWardDetails] = useState({});
  const [doctorsAllocated, setDoctorsAllocated] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [totalDays, setTotalDays] = useState(0);

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
  
  const navigate = useNavigate();

  const { id } = useParams();

  

  useEffect(() => {
    getPatientDetail(id);
    getDoctorsList(id);
  }, []);

  useEffect(() => {
    saveAndNavigate();
  }, [flag2]);

  function getWardDetails(ward_id) {
    wardService
      .getById(ward_id)
      .then((resp) => {
        setWardDetails(resp.data);
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
    calculateNoOfDays();
    // Charges();
    setFlag(true);
  }

  function saveAndNavigate(){
    if(flag2){
      patientService.update(id,addpatient).then((resp)=>{
      
        navigate("/accountant");
      }).catch((err)=>{
        console.log(err+"error occured");
      })
    }

  }

  function getDoctorsList(patientId) {
    patientService
      .getAllocatedDoctors(patientId)
      .then((resp) => {
        setDoctorsAllocated(resp.data);
      })
      .catch((err) => {
        console.log("some error ocurred in patient details");
      });
  }

  function getPatientDetail(patientId) {
    patientService
      .get(patientId)
      .then((resp) => {
        setPatientDetails(resp.data);
        setaddPatient(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });
  }

  const handleChange = (key, value) => {
    console.log("called");
    setaddPatient({ ...addpatient, [key]: value });
  };

  function calculateDoctorCharges() {
    var sum = 0;
    doctorsAllocated.forEach((element) => {
      sum = sum + element.charges;
    });
    return sum;
  }

  function calculateNoOfDays() {
    var today = new Date();
    var admission_date = new Date(patientDetails.dateOfAdmission);
    var diff_in_time = today.getTime() - admission_date.getTime();
    var total_days = Math.floor(diff_in_time / (1000 * 3600 * 24));
    setTotalDays(total_days);
    return total_days;
  }


  
  function changePayStatus()
  {    
    //console.log(addpatient);
    handleChange("paymentStatus","PAID");
    setFlag2(true);
    
  }
  
 

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>{patientDetails.patientId} </td>
          </tr>
          <tr>
            <td>firstName</td>
            <td>{patientDetails.firstName}</td>
          </tr>
          <tr>
            <td>lastName</td>
            <td>{patientDetails.lastName}</td>
          </tr>
          <tr>
            <td>Ward Number</td>
            <td>{patientDetails.wardId} </td>
          </tr>
          <tr>
            <td>email</td>
            <td>{patientDetails.email} </td>
          </tr>
          <tr>
            <td>Contact No.</td>
            <td>{patientDetails.contactNo} </td>
          </tr>
          <tr>
            <td>BloodGr</td>
            <td>{patientDetails.bloodGroup} </td>
          </tr>
          <tr>
            <td>Date_Of_Admission</td>
            <td>{patientDetails.dateOfAdmission} </td>
          </tr>
          <tr>
            <td>DOB</td>
            <td>{patientDetails.dob}</td>
          </tr>

          <tr>
            <td>payStatus</td>
            <td>{patientDetails.paymentStatus}</td>
          </tr>
          <tr>
            <td>ward_id</td>
            <td>{patientDetails.wardId}</td>
          </tr>
          <tr>
            <td>disease</td>
            <td>{patientDetails.disease}</td>
          </tr>
          <tr>
            <td>Doctors Allocated</td>
            {doctorsAllocated.map((i) => (
              <td key={i.doctorId}>{i.firstName}</td>
            ))}
          </tr>
          {/* <tr>
          <td>disease</td>
          {patientDetails.patientProblems?.map((i)=>(<td>{i.disease}</td>))}
        </tr> */}
        </tbody>
      </table>

      <br />
      <br />

      <button
        onClick={() => {
          getWardDetails(patientDetails.wardId);
        }}
      >
        Generate BIll
      </button>

      <br />
      <br />

      {flag ? (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Items</th>
                <th>charges</th>
                <th>No of Days</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Doctor Charges</td>
                <td>{calculateDoctorCharges()}</td>
                <td>{totalDays}</td>
                <td>Rs. {calculateDoctorCharges() * totalDays}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{wardDetails.type} Ward Charges</td>
                <td>{wardDetails.charges}</td>
                <td>{totalDays}</td>
                <td>Rs. {wardDetails.charges * totalDays}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Medical Charges</td>
                <td>1100</td>
                <td>{totalDays}</td>
                <td>Rs. {1100 * totalDays}</td>
              </tr>

              <tr>
                <td colSpan={3}></td>
                <td>
                  Rs.{" "}
                  {calculateDoctorCharges() * totalDays +
                    wardDetails.charges * totalDays +
                    1100 * totalDays}
                </td>
              </tr>
            </tbody>
          </table>{" "}
          <button onClick={changePayStatus}>Pay</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Invoice;

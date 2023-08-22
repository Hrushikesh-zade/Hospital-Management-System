import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patientService from "../../services/patient.service";

const PatientDetails = () => {
  const [patientDetails, setPatientDetails] = useState({});
  const [doctorsAllocated, setDoctorsAllocated] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPatientDetail(id);
    getDoctorsList(id);
  }, []);

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

  function getPatientDetail(patientId) {
    patientService
      .get(patientId)
      .then((resp) => {
        setPatientDetails(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });
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
          {doctorsAllocated.map((i)=>(<td key={i.doctorId}>{i.firstName}</td>))}
          </tr>
          {/* <tr>
          <td>disease</td>
          {patientDetails.patientProblems?.map((i)=>(<td>{i.disease}</td>))}
        </tr> */}
        </tbody>
      </table>

    </div>
  );
};

export default PatientDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import employeeService from "../../services/employeeService";


const EmployeeInfo = () => {

    const [employeeDetails,setEmployeeDetails] = useState({});
    const { id } = useParams();


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



//       "empId": 1,
//   "firstName": "employee1",
//   "lastName": "z1",
//   "email": "employee1@gmail.com",
//   "role": "ADMIN",
//   "dob": "2023-07-18",
//   "gender": "MALE",
//   "contactNo": 123456790,
//   "hiringDate": "2023-07-18",
//   "salary": 50000


    return (
        <div>
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>{employeeDetails.empId} </td>
          </tr>
          <tr>
            <td>firstName</td>
            <td>{employeeDetails.firstName}</td>
          </tr>
          <tr>
            <td>lastName</td>
            <td>{employeeDetails.lastName}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{employeeDetails.email} </td>
          </tr>
          <tr>
            <td>Contact No.</td>
            <td>{employeeDetails.contactNo} </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{employeeDetails.gender} </td>
          </tr>
          <tr>
            <td>DOB</td>
            <td>{employeeDetails.dob}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>{employeeDetails.role}</td>
          </tr>
          <tr>
            <td>Hiring Date</td>
            <td>{employeeDetails.hiringDate}</td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>{employeeDetails.salary}</td>
          </tr>
          {/* <tr>
          <td>disease</td>
          {patientDetails.patientProblems?.map((i)=>(<td>{i.disease}</td>))}
        </tr> */}
        </tbody>
      </table>

    </div>
    );
}

export default EmployeeInfo;
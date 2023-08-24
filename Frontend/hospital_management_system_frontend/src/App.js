import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PatientHomePage from "./components/Receptionist/PatientHomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPatient from "./components/Receptionist/AddPatient";
import PatientDetails from "./components/Receptionist/PatientDetails";
import EditPatient from "./components/Receptionist/EditPatient";
import PatientLoginDetails from "./components/Patient/PatientLoginDetails";
import AdminPage from "./components/Admin/AdminPage";
import AddEmployee from "./components/Admin/AddEmployee";
import EditEmployee from "./components/Admin/EditEmployee";
import EmployeeInfo from "./components/Admin/EmployeeInfo";
import AddDoctor from "./components/Admin/AddDoctor";
import PatientList from "./components/Accountant/PatientList";
import Invoice from "./components/Accountant/Invoice";
import AddPrescription from "./components/Doctor/AddPrescription";
import DoctorPage from "./components/Doctor/DoctorPage";
import Login from "./components/Signin/Login";
import TImePass from "./components/TimePass/TImePassPage";
import DoctorProfile from "./components/Doctor/DoctorProfile";
import ChangePassword from "./components/General/ChangePassword";
import InactivePatients from "./components/Receptionist/InactivePatient";
import InactiveEmployees from "./components/Admin/InactiveEmployees";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>


        {/* receptionist page routes */}
          {/* <Route exact path="/" element={<TImePass />} /> */}

          {/* receptionist page routes */}
          <Route exact path="/" element={<PatientHomePage />} />
          <Route path="/addPatient" element={<AddPatient />} />
          <Route path="/patientDetails/:id" element={<PatientDetails />} />
          <Route path="/patient/edit/:id" element={<EditPatient />} />
          <Route path="/patientView/:id" element={<PatientLoginDetails />} />
          <Route path="/inactivePatients" element={<InactivePatients />} />

          {/* admin page routes */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add" element={<AddEmployee />} />
          <Route path="/admin/addDoctor" element={<AddDoctor />} />
          <Route path="/admin/edit/:id" element={<EditEmployee />} />
          <Route path="/admin/info/:id" element={<EmployeeInfo />} />
          <Route path="/admin/inactiveEmployees" element={<InactiveEmployees />} />

          {/* accountant page routes */}
          <Route exact path="/accountant" element={<PatientList />} />
          <Route path="/accountant/invoice/:id" element={<Invoice />} />

          {/* doctor page routes */}
          <Route path="/doctors/:id" element={<DoctorPage />} />
          <Route path="/doctors/profile/:id" element={<DoctorProfile/>} />
          <Route
            path="/doctors/:doc_id/patient/:pat_id"
            element={<AddPrescription />}
          />

          {/* login page route */}
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword/:id" element={<ChangePassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { useEffect, useState } from "react";
import doctorService from "../../services/doctorService";
import { Link, useParams } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import Navbar from "../General/Navbar";

const DoctorPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [patients, setPatients] = useState([]);
  // const [patient, setPatient] = useState({});
  // const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchByFirstName, setSearchByFirstName] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");
  const [searchById, setSearchById] = useState("");
  const [doctor,setDoctor] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getAllPatients(id);
    getDoctorsInfo(id);
    
  }, []);

  function getAllPatients(doctor_id) {
    doctorService
      .getAllPatients(doctor_id)
      .then((resp) => {
        setPatients(resp.data);
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }

  function getDoctorsInfo(docs_id) {
    doctorService
      .getDoctorInfo(docs_id)
      .then((resp) => {
        console.log("**********");
        console.log(resp.data);
        setDoctor(resp.data);
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }

  // const handleShow = (p) => {
  //   setPatient(p);
  //   setShow(true);
  // };

  const clearAllFilters = () => {
    setOpen(false);
    setSearchByEmail("");
    setSearchByFirstName("");
    setSearchById("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);


  return (
    <div>
      <Navbar firstName={doctor.firstName} lastName={doctor.lastName} sid={doctor.doctorId} role={doctor.role} ></Navbar>


      <div className="container-fluid ">
        <div className="p-3 mb-2 bg-light text-white">
          <div
            className="container-fluid text-center"
            style={{ border: "2px solid red" }}
          >
            {/* <div id="filterdiv" */}
            <div
              className="d-grid gap-2 d-md-flex justify-content-md-end"
              // style={{ border: "2px solid red" }}
            >
              <button
                className="btn btn-primary me-md-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-filter-menu"
                aria-expanded={open}
                // style={{ border: "2px solid black" }}
              >
                <i className="bi bi-funnel"></i>
                Filter it
              </button>
              {/* <Link to="/addPatient" className="btn btn-primary">
                Add Patient
              </Link> */}
            </div>
          </div>

          <Collapse in={open}>
            <div id="collapse-filter-menu">
              <div className="text-dark">
                <div className="container-fluid text-center">
                  <div className="row">
                    <div className="col-2">Filter</div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="col-lg-12">Id</div>
                      <div className="col-lg-12">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search ny id"
                          aria-label="Search"
                          value={searchById}
                          onChange={(e) => setSearchById(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="col-lg-12">NAME</div>
                      <div className="col-lg-12">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="search by name"
                          aria-label="Search"
                          value={searchByFirstName}
                          onChange={(e) => setSearchByFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="col-lg-12">Email</div>
                      <div className="col-lg-12">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search by email"
                          aria-label="Search"
                          value={searchByEmail}
                          onChange={(e) => setSearchByEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <button
                      // style={{marginTop:"10px"}}
                      type="button"
                      className="btn btn-primary mt-4"
                      onClick={() => {
                        clearAllFilters();
                      }}
                    >
                      clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>

      <div className="container-fluid ">
        <table className="table table-secondary table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">GENDER</th>
              <th scope="col">DATE_OF_BIRTH</th>
              <th scope="col">WARD</th>
              
              <th scope="col">EXAMINE</th>
              
            </tr>
          </thead>
          <tbody>
            {patients
              .filter((cf) => {
                if (
                  (searchByFirstName === "" ||
                    searchByFirstName.trim() === "") &&
                  (searchById === "" || searchById.trim() === "") &&
                  (searchByEmail === "" || searchByEmail.trim() === "")
                ) {
                  return cf;
                } else if (
                  (cf.firstName
                    .toLowerCase()
                    .includes(searchByFirstName.toLowerCase()) ||
                    cf.lastName
                      .toLowerCase()
                      .includes(searchByFirstName.toLowerCase())) &&
                  cf.patientId.toString().includes(searchById.toLowerCase()) &&
                  cf.email.toLowerCase().includes(searchByEmail.toLowerCase())
                ) {
                  return cf;
                } else {
                  return false;
                }
              })

              .map((patient) => (
                <tr key={patient.patientId}>
                  <td>{patient.patientId}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.email}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.dob}</td>
                  <td>{patient.wardId}</td>

                  

                  <td>
                    <Link
                      className="btn btn-success"
                      to={`/doctors/${id}/patient/${patient.patientId}`}
                    >
                      <i className="bi bi-pencil-square"></i>
                      Examine
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPage;

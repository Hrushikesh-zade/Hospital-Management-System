import { useEffect, useState } from "react";
import employeeService from "../../services/employeeService";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Collapse, Modal } from "react-bootstrap";

const InactiveEmployees = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchByFirstName, setSearchByFirstName] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");
  const [searchById, setSearchById] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getEmployees();
  }, []);


  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);



  const clearAllFilters = () => {
    setOpen(false);
    setSearchByEmail("");
    setSearchByFirstName("");
    setSearchById("");
  };

  const activate = (empId) => {
    // console.log("Printing id", id);
    employeeService
      .reassign(empId)
      .then((response) => {
        navigate("/admin");

        
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  function getEmployees() {
    employeeService
      .getAllInactive()
      .then((resp) => {
        setEmployeeList(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  return (
    <div>
      
      {/* start of  filter bar */}

      {/* 2 container */}

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
              <Link to="/admin" className="btn btn-primary">
                Go Back
              </Link>
              
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

      {/* /************************************************ */}

      <div className="container-fluid ">
        <table className="table table-secondary table-striped">
          <thead>
            <tr>
              <th scope="col">EMPLOYEE Id</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ROLE</th>
              <th scope="col">DETAILS</th>
              <th scope="col">EDIT</th>
              <th scope="col">ACTIVATE</th>
            </tr>
          </thead>
          <tbody>
            {employeeList
              .filter((cf)=>{
                if (
                  (searchByFirstName === "" ||
                    searchByFirstName.trim() === "") &&
                  (searchById === "" || searchById.trim() === "") &&
                  (searchByEmail === "" || searchByEmail.trim() === "")
                ) {
                  return cf;
                }
                 else if (
                    (cf.firstName
                        .toLowerCase()
                        .includes(searchByFirstName.toLowerCase()) ||
                        cf.lastName
                          .toLowerCase()
                          .includes(searchByFirstName.toLowerCase()))
                           &&
                  cf.empId.toString().includes(searchById.toLowerCase())
                   &&
                  cf.email.toLowerCase().includes(searchByEmail.toLowerCase())
                ) {
                  return cf;
                }
                else{
                    return false;
                }
              })

              .map((patient) => (
                <tr key={patient.empId}>
                  <td>{patient.empId}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.email}</td>
                  <td>{patient.role}</td>
                  <td>
                    <Link
                      to={`/admin/info/${patient.empId}`}
                      className="btn btn-info mb-2"
                    >
                      <i className="bi bi-info-circle-fill"></i>
                      Info
                    </Link>
                  </td>

                  <td>
                    <Link
                      className="btn btn-secondary"
                      to={`/admin/edit/${patient.empId}`}
                    >
                      <i className="bi bi-pencil-square"></i>
                      Edit
                    </Link>
                  </td>

                  <td>
                    <button
                      className="btn btn-success ml-2"
                      onClick={()=>{
                        activate(patient.empId);
                      }}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                      Activate
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InactiveEmployees;
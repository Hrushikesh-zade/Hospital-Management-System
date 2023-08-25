import React, { useEffect, useState } from "react";
import { Container, NavDropdown, Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import userService from "../../services/userService";

function HeaderNavbar(props) {

  const [pass, setPass] = useState(
    {
        email: "",
        password: ""
    }
  );

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    setPass(prevPass => ({
      ...prevPass,
      email: props.emailId
    }));
  }, [props.emailId]);

  const sendProfile = () => {
    if (props.role === "DOCTOR") {
      
      navigate(`/doctors/profile/${props.sid}`);
    } else if (props.role === "ADMIN") {
      navigate(`/admin/profile/${props.sid}`);

    } 
    else if (props.role === "ACCOUNTANT") {
      
      navigate(`/accountant/profile/${props.sid}`)
    } else if (props.role === "RECEPTIONIST") {
      navigate(`/receptionist/profile/${props.sid}`)
    } 
    else if (props.role === "PATIENT") {
      
    } 
    else {
      console.log("error in navbar");
    }
  };

  const changePassword = () => {
    console.log("----------------------------");
    console.log(pass);
    userService.getUserByEmail(pass).then((resp)=>{
      console.log(resp.data);
        navigate(`/changePassword/${resp.data.userId}`);
    }).catch((err)=>{
        console.log("error");
    })
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Silver Spring Hospital</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <i
              className="bi bi-person-circle"
              style={{ color: "White", marginRight: "4px" }}
            ></i>
            <NavDropdown
              title={props.firstName===""?"UserName":props.firstName}
              style={{ color: "White" }}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <button className="nav-link mx-5" onClick={sendProfile}>
                  Profile
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button className="nav-link mx-1" onClick={changePassword}>
                  Change Password
                </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button
                  className="btn btn-danger mx-auto"
                  onClick={logout}
                  style={{ width: "100%" }}
                >
                  Log Out
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default HeaderNavbar;

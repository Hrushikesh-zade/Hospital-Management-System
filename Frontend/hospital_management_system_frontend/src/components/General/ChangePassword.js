import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../services/userService";

const ChangePassword = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  useEffect(() => {
    userService
      .getUserEmailById(id)
      .then((resp) => {
        console.log("kjsdfhkhfkh");
        console.log(resp.data);
        handleChange("email", resp.data.email);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const saveAndSubmit = () => {
    
      userService
        .changePassword(user)
        .then((resp) => {
          localStorage.removeItem("token");
         navigate("/login");
        // navigate(`/doctors/profile/${id}`)
        })
        .catch((err) => {
          console.log("Error" + err);
        });
    
  };

  return (
    <div>
      <br />
      <label>Enter Email</label>
      <input
        value={user.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <br />

      <br />
      <label>Enter password</label>
      <input
        value={user.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <br />
      <br />
      <label>Enter password</label>
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />

      <button onClick={saveAndSubmit}>submit</button>
    </div>
  );
};

export default ChangePassword;

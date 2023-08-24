import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import doctorService from "../../services/doctorService";
import userService from "../../services/userService";

const DoctorProfile = () => {
  const [profile, setProfile] = useState({});
  const [pass, setPass] = useState(
    {
        email: "",
        password: ""
    }
  )
    


  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("ans2");
    doctorService
      .getDoctorInfo(id)
      .then((resp) => {
        setProfile(resp.data);
        console.log(resp.data);
       setPass({...pass,email:resp.data.email});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePassword = () => {
    userService.getUserByEmail(pass).then((resp)=>{
        navigate(`/changePassword/${resp.data.userId}`);
    }).catch((err)=>{
        console.log("error");
    })
  };

  return (
    <div>
      <button onClick={changePassword}> Change Password</button>
      <br />
      <br />
      {profile.charges}
      <br />
      <br />
      {profile.contactNo}
      <br />
      <br />
      dob: {profile.dob}
      <br />
      <br />
      {profile.doctorId}
      <br />
      <br />
      {profile.email}
      <br />
      <br />
      {profile.firstName}
      <br />
      <br />
      {profile.gender}
      <br />
      <br />
      hiring date : {profile.hiringDate}
      <br />
      <br />
      {profile.lastName}
      <br />
      <br />
      {profile.role}
      <br />
      <br />
      {profile.salary}
      <br />
      <br />
      {profile.status}
    </div>
  );
};

export default DoctorProfile;

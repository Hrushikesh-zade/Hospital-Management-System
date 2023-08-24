import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import doctorService from "../../services/doctorService";
// import userService from "../../services/userService";

const DoctorProfile = () => {
  const [profile, setProfile] = useState({});

  const { id } = useParams();

  useEffect(() => {
    console.log("ans2");
    doctorService
      .getDoctorInfo(id)
      .then((resp) => {
        setProfile(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      {/* <button onClick={changePassword}> Change Password</button> */}
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

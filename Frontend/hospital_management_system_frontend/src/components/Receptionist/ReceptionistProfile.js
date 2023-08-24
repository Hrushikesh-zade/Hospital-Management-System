import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../services/userService";
// import userService from "../../services/userService";

const ReceptionistProfile = () => {
  const [profile, setProfile] = useState({});
  // const [pass, setPass] = useState(
  //   {
  //       email: "",
  //       password: ""
  //   }
  // )
    


  const { id } = useParams();


  useEffect(() => {
    console.log("ans2");
    userService
      .getUserEmailById(id)
      .then((resp) => {
          console.log("resp.data");
        setProfile(resp.data);
        console.log(resp.data);
      //  setPass({...pass,email:resp.data.email});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      {/* <button onClick={changePassword}> Change Password</button> */}
      
      <br />
      {profile.contactNo}
      <br />
      <br />
      dob: {profile.dob}
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
      {/* hiring date : {profile.hiringDate} */}
      <br />
      <br />
      {profile.lastName}
      <br />
      <br />
      {profile.role}
      <br />
      <br />
      {profile.userId}
      <br />
      <br />
      {profile.status}
      
    </div>
  );
};

export default ReceptionistProfile;

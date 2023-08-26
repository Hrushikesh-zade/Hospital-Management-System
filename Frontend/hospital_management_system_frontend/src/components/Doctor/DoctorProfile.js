import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import doctorService from "../../services/doctorService";
import profilePic from "../../images/user_icon.png"
import "../../css/customProfile.css";

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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <>
            <div className='mainDiv'>
                <div className='cardHolder  p-3' >
                    <div className='card-containerDiv-Profile shadow bg-white rounded'>
                        <span className="pro">{profile.role}</span>
                        
                        
          
                        <img src={profilePic} className="profilePic" alt="avtar" />
                    </div>
                    <div className="card-containerDiv shadow">
                        {/* <span className="pro">{profile.role}(Role)</span>
    <img src={profilePic} className="profilePic"/> */}
                        <h3>{profile.firstName} {profile.lastName}</h3>
                        <h3>status:{profile.status}</h3>

                        <div className="skills">
                            <ul >
                                <div className='listDiv '>
                                    <li>charges: {profile.charges}</li>
                                    <li>Email : {profile.email}</li>

                                </div>
                                <hr />
                                <div className='listDiv '>
                                    <li>contactNo : {profile.contactNo}</li>
                                    <li>salary : {profile.salary} </li>

                                </div>
                                <hr />
                                <div className='listDiv'>
                                    <li>dob : {profile.dob}</li>
                                    <li>hiringDate : {profile.hiringDate}</li>

                                </div>
                                <hr />
                                <div className='listDiv'>
                                    <li>doctorId : {profile.doctorId}</li>
                                    <li>gender : {profile.gender}</li>

                                </div>
                                <hr />


                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
      
      
    </div>
  );
};

export default DoctorProfile;

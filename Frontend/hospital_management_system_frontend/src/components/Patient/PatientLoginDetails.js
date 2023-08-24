import { useEffect, useState } from "react";
import avtar from "../../images/UserAvtar.png";
import { useParams } from "react-router-dom";
import patientUserService from "../../services/patientUserService";
import "../../css/profile.css";
function PatientLoginDetails() {
  

  const [patientUser, setPatientUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    patientUserService
      .get(id)
      .then((resp) => {
        console.log("loaded successfully");
        console.log(id);
        console.log(resp.data);
        setPatientUser(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <!-- user card starts --> */}
          <div className="card user-card">
            {/* <!-- card header - contains payment status & close button --> */}
            <div className="card-header">
              <div className="container">
                <div className="d-flex justify-content-between">
                  {/* <!-- payment status --> */}
                  {/* <h5>{patientUser.payStatus}</h5> */}
                  {/* <!-- close button --> */}
                  {/* <button className="btn-close"></button> */}
                </div>
              </div>
            </div>
            {/* <!-- card header ends --> */}
            {/* <!-- card block starts --> */}
            <div className="card-block text-center">
              <div className="user-image ">
                {/* <!-- <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-radius" alt="User-Profile-Image"> --> */}
                {/* <img src="../images/UserAvtar.png" alt="User-Profile-Image" className="rounded-circle border border-4"/> */}
                <img
                  src={avtar}
                  alt="avtar"
                  className="rounded-circle border border-4"
                />
              </div>
              <div className="position-absolute top-0 start-100 translate-middle"></div>
              <h6 className="f-w-600 m-t-25 m-b-10"><span>{patientUser.firstName}</span><span className="ms-2">{patientUser.lastName}</span></h6>
              <p className="text-muted">
                gender : Male(hardcoded) | bloodGrp : {patientUser.bloodGrp} |
                DOB: {patientUser.DOB}
              </p>
              <hr />
              <p className="text-muted m-t-15">paymentStatus : {patientUser.payStatus}</p>

              <div className="box">
                <div className="row">
                  <div className="col-4">
                    <p>pid</p>
                  </div>
                  <div className="col-4">
                    <p>userId</p>
                  </div>
                  <div className="col-4">
                    <p>WardId + Bed</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <p>{patientUser.id}</p>
                  </div>
                  <div className="col-4">
                    <p>{patientUser.id}</p>
                  </div>
                  <div className="col-4">
                    <p>
                      {patientUser.ward_id}+{patientUser.Bed_Alloted}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card block ends --> */}
            <div className=" card-body" >
              <div className="row position-relative">
                <div>
                  <h4 className="position-absolute top-20 start-10">
                    General Details:
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xs-12">
                  <div className="box">
                    <span>email: {patientUser.email}</span>
                  </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                  <div className="box">
                    <span>mobile: {patientUser.phone_no}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="box">
                    <span>
                      date of admission :{patientUser.Date_Of_Admission}
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="box">
                    <span>doctor allocated :{patientUser.Doct_Alloted}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h4>Patient Problem :</h4>
              <div className="box">
              {patientUser.symptoms?.map((i)=>(
                <p>{i}</p>
              ))}
              </div>
            </div>

            <div className="card-body">
              <h4>Prescription :</h4>
              <div className="box">
              {/* {patientUser.prescription?.map((item)=>(
                <p>{item}</p>
              ))} */}
              {patientUser.prescription}
                
              </div>
            </div>
          </div>
        </div>
        {/* <!-- user card ends --> */}
      </div>
      {/* <!-- Main col ends-  --> */}
    </div>
  );
}

export default PatientLoginDetails;

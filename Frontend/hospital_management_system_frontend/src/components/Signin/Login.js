import { useEffect, useState } from "react";
import userService from "../../services/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [token,setToken] = useState();

  const navigate = useNavigate();

  
   function getUser(d) {
    console.log("+++++++++++++++++++++");
    console.log(userService.getToken());
    console.log(d);
    userService
      .getUser(d)
      .then((resp) => {
        console.log("hrushi");
        console.log(resp.data);

        localStorage.setItem("role",resp.data.role);

        if(resp.data.role === "ADMIN"){
          
         navigate("/admin/"+resp.data.userId);
            
        }else if(resp.data.role === "RECEPTIONIST"){

             navigate("/receptionist/"+resp.data.userId);
        }else if(resp.data.role === "DOCTOR"){

            navigate("/doctors/"+resp.data.roleId);
        }else if(resp.data.role === "PATIENT"){
            navigate("/patientView/"+resp.data.roleId);
        }else if(resp.data.role === "ACCOUNTANT"){
            navigate("/accountant/"+resp.data.userId);
        }else{
            console.log("Error");
        }
      })
      .catch((err) => {
        console.log("Error 2" + err);
      });
  }

  useEffect(()=>{
    if(localStorage.getItem("token") != null){

      console.log("/******/***********/")
      console.log(user)
      getUser(user);
    }

  },[token]);

   function getTokenAndStore(userData) {
    userService.getTokenRequest(userData).then((resp) => {
      localStorage.setItem("token", resp.data.jwt);
      setToken(resp.data.jwt);
    }).catch((err) => {
      console.log("Error 1" + err);
    });
  }
  
   

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <div>
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
        type="password"
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={() => {
            getTokenAndStore(user);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

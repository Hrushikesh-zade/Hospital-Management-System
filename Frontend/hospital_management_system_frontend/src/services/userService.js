import axios from "axios";

const url = "http://localhost:8080/auth/signin";
const login_url = "http://localhost:8080/users/login";

const config = {
    headers:{
      Authorization:""
    }
  };

const getTokenRequest=(data)=>{
    return axios.post(url,data);
}

const getToken=()=>{
    let t_k = localStorage.getItem("token");
    console.log("t_k -->"+ t_k);
    config.headers.Authorization = "Bearer "+ t_k;

    return config;
}

const getUser=(data)=>{
    console.log(getToken());
    return axios.post(login_url,data,config);
}

export default {getTokenRequest,getToken,getUser};
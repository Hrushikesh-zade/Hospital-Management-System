import axios from "axios";


const url = "http://localhost:3000/patientviewdetails";
const get = (id) => {
    return axios.get(url+`/${id}`);
  };


  export default { get};

// import httpClient from '../http-common';
import axios from "axios";

const url = "http://localhost:8080/doctors";
const url2 = "http://localhost:8080/patients/patient"

const getAll = () => {
  return axios.get(url);
};

const create = (data) => {
  return axios.post(url, data);
};

const getAllPatients =(id) =>{
  return axios.get(url+`/patients/${id}`);
 }
 
 const addDoctor =(patient_id,doctor_id)=>{
   return axios.put(url2+`/${patient_id}/doctor/${doctor_id}`);
 }

 
export default { getAll, create,getAllPatients,addDoctor };

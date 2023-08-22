// import httpClient from '../http-common';
import axios from "axios";

const url = "http://localhost:8080/patients";

const getAll = () => {
  return axios.get(url);
};

const get = (id) => {
  return axios.get(url+`/${id}`);
};

const getAllocatedDoctors = (id) => {
  return axios.get(url+`/doctors/${id}`);
};

const update = (id,data) => {
  return axios.put(url+`/${id}`, data);
};

const create = (data) => {
  return axios.post(url, data);
};

const remove = (id) => {
  return axios.delete(url+`/${id}`);
};


export default { getAll, create, get, update, remove,getAllocatedDoctors };

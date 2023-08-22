import axios from "axios";

const url = "http://localhost:8080/wards";

const getAll = () => {
  return axios.get(url);
};

const getById = (id) => {
  return axios.get(url+`/${id}`);
};


export default {getAll,getById};
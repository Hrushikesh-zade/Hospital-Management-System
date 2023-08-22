import axios from "axios";

const url = "http://localhost:8080/employees";

const getAll=()=>{
    return axios.get(url);
}

const get = (id) => {
    return axios.get(url+`/${id}`);
};

const create = (data) => {
    return axios.post(url, data);
  };

const update = (id,data) => {
    return axios.put(url+`/${id}`, data);
  };

const remove=(id)=>{
    return axios.delete(url+`/${id}`);
}

export default {getAll,remove,get,create,update};
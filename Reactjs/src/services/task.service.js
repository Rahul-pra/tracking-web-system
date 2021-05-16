import axios from "axios";
import config from "../Config";
import authHeader from "./auth-header";

const API_URL = config.apiUrl;

const saveTask = (data) => {
    console.log("data ==>", data);
    return axios.post(API_URL + "add-task", data, { headers: authHeader() });
};

const getTasks = () => {
    return axios.get(API_URL + "get-all-tasks", { headers: authHeader() });
};

const saveSubTask = (data) => {
    return axios.post(API_URL + "add-sub-task", data, { headers: authHeader() });
};

const getSubTasks = () => {
    return axios.get(API_URL + "get-all-sub-tasks", { headers: authHeader() });
};

const editSubTask = (data) => {
    return axios.put(API_URL + "edit-sub-task", data, { headers: authHeader() });
};

const taskServices = {
    saveTask,
    getTasks,
    saveSubTask,
    getSubTasks,
    editSubTask,
};

export default taskServices
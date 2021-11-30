import axios from "axios";
import store from "@/store";
import { getToken } from "@/utils/auth";

const service = axios.create({
    // alterar para env
    baseURL: 'https://form-mest-service.herokuapp.com',
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers.Authorization = `Bearer ${getToken()}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;

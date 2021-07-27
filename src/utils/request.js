import axios from "axios";
//import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

const service = axios.create({
    // alterar para env
    baseURL: 'http://localhost:8000',
    timeout: 5000
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

// Criar refresh do token caso esteja exppirado
/*
service.interceptors.response.use(
    response => {
        const res = response.data
    }
)
*/

export default service;

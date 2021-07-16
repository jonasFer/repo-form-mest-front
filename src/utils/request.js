import axios from "axios";
//import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

const service = axios.create({
    // alterar para env
    baseURL: 'https://form-mest-service.herokuapp.com/',
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
        console.log(error);
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

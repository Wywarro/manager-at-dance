import Vue from "vue";

import axios, { AxiosInstance, AxiosResponse } from "axios";

const flaskApi: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

// interceptor to catch errors
const errorInterceptor = (error: any) => {
  // all the error responses
  console.error(error.response.status, error.message);
  Vue.notify({
    group: "app",
    title: error.response.status,
    text: error.message,
  });
  return Promise.reject(error);
};

// Interceptor for responses
const responseInterceptor = (response: AxiosResponse) => response;

flaskApi.interceptors.response.use(responseInterceptor, errorInterceptor);

export default flaskApi;

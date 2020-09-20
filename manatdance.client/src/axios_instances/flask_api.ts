import Vue from "vue";

import axios, { AxiosInstance, AxiosResponse } from "axios";

const flaskApi: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

// interceptor to catch errors
// eslint-disable-next-line
const errorInterceptor = (error: any) => {
  // all the error responses
  const { response, message } = error;
  if (response) {
    const { status } = response;
    console.error(status, message);
    Vue.notify({
      group: "app",
      title: status,
      text: message,
    });
  } else {
    Vue.notify({
      group: "app",
      text: error,
    });
  }

  return Promise.reject(error);
};

// Interceptor for responses
const responseInterceptor = (response: AxiosResponse) => response;

flaskApi.interceptors.response.use(responseInterceptor, errorInterceptor);

export default flaskApi;

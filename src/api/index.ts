import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const makeRequest = async <T>(config: AxiosRequestConfig) => {
  try {
    const response = await axios.request<T>(config);
    console.log(
      `response in service: url=${config.url} method=${config.method}`,
      response
    );
    return response;
  } catch (error) {
    console.log(`error in service ${config.url} method=${config.method}`, error);
    return;
  }
};

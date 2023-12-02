import axios, { AxiosError } from "axios";
import { setHandler, setAxiosInstance, axiosHandler } from "fe-sdk";

export * from "fe-sdk/lib/user-api";
export * from "fe-sdk/lib/apiconf-refs";
export * from "fe-sdk/lib/shared-refs";

export const baseURL = process.env.API_URL || "";

export const apiType = "user";
export const apiURL = baseURL + `/api/${apiType}`;

const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {},
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    throw new Error(
      (error?.response?.data as { msg: string })?.msg || error?.message
    );
  }
);

setAxiosInstance(axiosInstance);
setHandler(axiosHandler);

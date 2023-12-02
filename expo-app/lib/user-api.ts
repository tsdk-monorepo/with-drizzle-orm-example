import axios, { AxiosError } from "axios";
import { setHandler, setAxiosInstance, axiosHandler } from "fe-sdk";
import Constants from "expo-constants";

export * from "fe-sdk/lib/user-api";
export * from "fe-sdk/lib/apiconf-refs";
export * from "fe-sdk/lib/shared-refs";

const host = Constants.expoGoConfig?.debuggerHost?.split(":")?.[0];

export const baseURL = host
  ? "http://" +
    host +
    ":" +
    (process.env.EXPO_PUBLIC_API_URL || "").split(":").pop()
  : process.env.EXPO_PUBLIC_API_URL || "";

console.log("baseURL", baseURL);

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

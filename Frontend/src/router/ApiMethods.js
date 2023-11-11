import axios from "axios";

export const ApiHandle = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: "Bearer",
  },
});

export const Get = (endPoint, id) => {
  return ApiHandle.get(`${endPoint}/${id ? id : ""}`);
};

export const Post = (endPoint, model) => {
  return ApiHandle.post(`${endPoint}`, model);
};

export const Put = (endPoint, model) => {
  return ApiHandle.put(`${endPoint}`, model);
};

export const Delete = (endPoint, id) => {
  return ApiHandle.delete(`${endPoint}/${id ? id : ""}`);
};

import axios from "axios";

export const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};

export const deleteData = async (path, option = {}) => {
  const response = await httpRequest.delete(path, option);
  console.log(response)
};

  export const post = async (path, option = {}) => {
    const response = await httpRequest.post(path, option);
    console.log(response)
  };
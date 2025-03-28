import axios from "axios";
//import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
const BASE_URL = import.meta.env.VITE_API_URL;

//! Get the token
const token = getUserFromStorage();
//! Add
export const addTaskAPI = async ({ title, description }) => {
  const response = await axios.post(
    `${BASE_URL}/api/v1/tasks/create`,
    {
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
//! update
export const updateTaskAPI = async ({ title, description, id }) => {
  const response = await axios.put(
    `${BASE_URL}/api/v1/tasks/update/${id}`,
    {
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
//! delete
export const deleteTaskAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/tasks/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //Return a promise
  return response.data;
};
//! lists
export const listTaskAPI = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/tasks/lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //Return a promise
  return response.data;
};

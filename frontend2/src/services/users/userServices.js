import axios from "axios";

// Backend Base URL
const BASE_URL =
  "https://task-management-backend-3gajlaoau-kavya-vemulas-projects.vercel.app";

import { getUserFromStorage } from "../../utils/getUserFromStorage";

//! Get the token
const token = getUserFromStorage();
const headers = token ? { Authorization: `Bearer ${token}` } : {};

//! Login API
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}/api/v1/users/login`, {
    email,
    password,
  });
  return response.data;
};

//! Register API
export const registerAPI = async ({ email, password, username }) => {
  const response = await axios.post(`${BASE_URL}/api/v1/users/register`, {
    email,
    password,
    username,
  });
  return response.data;
};

//! Change Password API
export const changePasswordAPI = async (newPassword) => {
  const response = await axios.put(
    `${BASE_URL}/api/v1/users/change-password`,
    { newPassword },
    { headers }
  );
  return response.data;
};

//! Update Profile API
export const updateProfileAPI = async ({ email, username }) => {
  const response = await axios.put(
    `${BASE_URL}/api/v1/users/update-profile`,
    { email, username },
    { headers }
  );
  return response.data;
};

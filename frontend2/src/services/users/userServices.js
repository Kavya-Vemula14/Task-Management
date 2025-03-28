import axios from "axios";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

// Use relative API path to work with Vite proxy
const BASE_URL = "/api"; // No need for full backend URL when using proxy

// Axios instance with base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Function to get updated headers
const getAuthHeaders = () => {
  const token = getUserFromStorage();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

//! Login API
export const loginAPI = async ({ email, password }) => {
  try {
    const response = await api.post("/v1/users/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

//! Register API
export const registerAPI = async ({ email, password, username }) => {
  try {
    const response = await api.post("/v1/users/register", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);
    throw error;
  }
};

//! Change Password API
export const changePasswordAPI = async (newPassword) => {
  try {
    const response = await api.put(
      "/v1/users/change-password",
      { newPassword },
      { headers: getAuthHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Change password error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

//! Update Profile API
export const updateProfileAPI = async ({ email, username }) => {
  try {
    const response = await api.put(
      "/v1/users/update-profile",
      { email, username },
      { headers: getAuthHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Update profile error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice"; // Adjust the path if necessary

export const store = configureStore({
  reducer: {
    auth: authReducer, // Ensure this reducer exists
  },
});

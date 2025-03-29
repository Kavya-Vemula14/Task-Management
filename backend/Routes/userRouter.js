const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const userRouter = express.Router();

//register
userRouter.post("/register", usersController.register);
//login
userRouter.post("/login", usersController.login);
//profile
userRouter.get("/profile", isAuthenticated, usersController.profile);
//!change password
userRouter.put(
  "/change-password",
  isAuthenticated,
  usersController.changeUserPassword
);
//!update profile
userRouter.put(
  "/update-profile",
  isAuthenticated,
  usersController.updateUserProfile
);
module.exports = userRouter;

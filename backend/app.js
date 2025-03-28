const express = require("express");
const userRouter = require("./Routes/userRouter");
const taskRouter = require("./Routes/taskRouter");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/ErrorHandlerMiddleware");
const cors = require("cors");

const app = express();
//database

mongoose
  .connect(
    "mongodb+srv://kavya14052001:kEZGQwwfdm4fbtnv@kavya.ntt9r.mongodb.net/?retryWrites=true&w=majority&appName=Kavya"
  )
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));
//middleware
//! Cors config
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://task-management-frontend-a28fj1hyd-kavya-vemulas-projects.vercel.app", // Replace with actual URL
  ],
  credentials: true,
};
app.use(cors(corsOptions));
//Routes
app.get("/", (req, res) => {
  res.send("Backend is working!");
});
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);
//!eerror
app.use(errorHandler);
//middleware

//start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on this port ${PORT}`));

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
  origin: ["http://localhost:5173", "https://task-management-frontend2-ashy.vercel.app"],
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));
//!Middlewares

app.use(express.json()); //?Pass incoming json data

//Routes

app.use("/", userRouter);
app.use("/", taskRouter);
//!eerror
app.use(errorHandler);
//middleware

//start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on this port ${PORT}`));
app.get("/api", (req, res) => {
  res.send("Backend is working!");
});
module.exports=app;
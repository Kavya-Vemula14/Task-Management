const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const taskController = require("../controllers/taskCtrl");
const taskRouter = express.Router();

//add
taskRouter.post("/create", isAuthenticated, taskController.create);
//lists
taskRouter.get("/lists", isAuthenticated, taskController.lists);
//listbyid
taskRouter.get("/listbyid/:id", isAuthenticated, taskController.listid);
//update
taskRouter.put("/update/:id", isAuthenticated, taskController.update);
//delete
taskRouter.delete("/delete/:id", isAuthenticated, taskController.delete);
module.exports = taskRouter;

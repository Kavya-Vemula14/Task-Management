const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const taskController = require("../controllers/taskCtrl");
const taskRouter = express.Router();

//add
taskRouter.post("/api/v1/tasks/create", isAuthenticated, taskController.create);
//lists
taskRouter.get("/api/v1/tasks/lists", isAuthenticated, taskController.lists);
//listbyid
taskRouter.get(
  "/api/v1/tasks/listbyid/:id",
  isAuthenticated,
  taskController.listid
);
//update
taskRouter.put(
  "/api/v1/tasks/update/:id",
  isAuthenticated,
  taskController.update
);
//delete
taskRouter.delete(
  "/api/v1/tasks/delete/:id",
  isAuthenticated,
  taskController.delete
);
module.exports = taskRouter;

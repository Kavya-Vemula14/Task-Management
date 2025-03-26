const Task = require("../model/Task");
const asyncHandler = require("express-async-handler");

const taskController = {
  //add
  create: asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
      throw new Error("title and description are required");
    }
    //check if list already exists on the user
    const taskExists = await Task.findOne({ title, user: req.user });
    if (taskExists) {
      throw new Error(`Task ${taskExists.title}already exists in the database`);
    }
    //create the task
    const task = await Task.create({
      title,
      description,
      user: req.user,
    });
    res.status(201).json(task);
  }),
  //lists
  lists: asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user });
    res.status(201).json(tasks);
  }),
  //listbyid
  listid: asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
      throw new Error("not exists");
    } else {
      res.json(task);
    }
  }),

  //update
  update: asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      const updatedtask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedtask);
    }
  }),
  //delete
  delete: asyncHandler(async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "task removed" });
  }),
};
module.exports = taskController;

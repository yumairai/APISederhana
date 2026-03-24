const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json({ status: "success", data: todos });
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json({ status: "success", data: todo });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server jalan");
});
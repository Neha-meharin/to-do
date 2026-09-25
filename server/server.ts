import cors from "cors";
import "dotenv/config";
import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const app = express();

app.use(cors());

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Backend is working.");
});

app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: "asc",
    },
  });

  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const todo = await prisma.todo.create({
    data: {
      title: req.body.title,
    },
  });

  res.json(todo);
});

// DELETE TODO
app.delete("/todos/:id", async (req, res) => {
  const id = Number(req.params.id);

  await prisma.todo.delete({
    where: {
      id: id,
    },
  });

  res.json({ message: "Todo deleted" });
});

app.patch("/todos/:id/complete", async (req, res) => {
  const id = Number(req.params.id);

  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const updatedTodo = await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      completed: !todo.completed,
    },
  });

  res.json(updatedTodo);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
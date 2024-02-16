import express, { Request, Response } from "express";
import db from "./config/database.config";

// db connection
db.sync().then(() => {
  console.log("Connected to db successfully");
});

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ he: "ok" });
});

// listening port
app.listen(port, () => {
  console.log("Server is running!");
});

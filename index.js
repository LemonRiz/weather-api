// import { readFileSync, writeFile, writeFileSync } from "fs";
import express from "express";
import { sequelize } from "./db/index.js";
import { ConnectionAcquireTimeoutError } from "sequelize";

const app = express();
const port = process.env.PORT || 5500;

try {
  const result = await sequelize.sync();
  console.log(result);
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running on port" + port);
});

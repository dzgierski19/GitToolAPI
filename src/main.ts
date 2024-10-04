import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

const port = 5500;
const app = express();

app.get("/", (req, res) => {
  console.log("it's working");
  res.send("response from server");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

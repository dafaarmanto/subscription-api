import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Subscription API is up!");
});

app.listen(PORT, () => {
  console.log(`Subscription API is running on port: ${PORT}`);
});

export default app;

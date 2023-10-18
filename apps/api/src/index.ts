import express, { Application } from "express";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server Running on Port" + PORT));

import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

// Route
import gameRoute from "./routes/gameRoute";

app.use("/api/games", gameRoute);

export { app };

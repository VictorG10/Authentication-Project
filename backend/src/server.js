import express, { urlencoded } from "express";
import logger from "./middlewares/logger.js";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const Port = process.env.PORT || 8081;

// dotenv.config();

const app = express();

// middlewares
app.use(logger);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);

app.listen(Port, () => {
  connectDB();
  console.log(`Server is running on port: ${Port}`);
});

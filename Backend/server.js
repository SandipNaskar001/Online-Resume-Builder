import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import userRoutes from "./routes/userRouter.js";
import path from "path";
import { fileURLToPath } from "url";
import resumeRouter from "./routes/resumeRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
connectDb();
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/resume", resumeRouter);
app.use(
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, path) => {
      res.set("Access-control-allow-origin", "http://localhost:5173");
    },
  })
);

app.get("/", (req, res) => {
  res.send("api working...");
});

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});

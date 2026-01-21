import express from "express";
import router from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = 8000;

if (!process.env.FRONTEND_URL) throw new Error("FRONTEND_URL is not defined");

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello welcome to the Classroom API");
});

app.use("/api/subjects", router);

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});

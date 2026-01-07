import express from "express";
import cors from "cors";
import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", publicRoutes);
app.use("/users", privateRoutes);

app.listen(3001, () => console.log("🚀 Server Running"));

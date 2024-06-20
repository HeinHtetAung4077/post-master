import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from 'dotenv';
import connectMongoDB from "./mongoDb/connet_Db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoDB();
});

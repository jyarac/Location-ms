//initializa express
import express from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes"; 
import db from "./config/mongo";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
//listen at port 3000
app.use(router);
db().then(()=> console.log("db connected"))

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

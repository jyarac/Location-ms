//initializa express
import express from "express";
import "dotenv/config";
import cors from "cors";
import notificationRoutes from "./routes/notificationsRoutes";
import bodyParser from "body-parser";
import db from "./config/mongo";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
//listen at port 3000
app.use(bodyParser.json());
app.use("/notifications",notificationRoutes);
//start db
db().then(()=> console.log("db connected"))
//open db connection
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

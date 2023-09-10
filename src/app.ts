//initializa express
import express from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes";
import flightsRoutes from "./routes/flightsRoutes";
import notificationRoutes from "./routes/notificationsRoutes";
import db from "./config/neo4j";
import bodyParser from "body-parser";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
//listen at port 3000
app.use(bodyParser.json());
app.use("/flights",flightsRoutes);
app.use("/notifications",notificationRoutes);
//open db connection
db().then(()=> console.log("db connected"))
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

import { Request, Response, Router } from "express";
//import every function from the controller
import { getNotifications, getNotification, postNotifications, putNotifications, deleteNotification} from "../controllers/Notification";

const router = Router();
 
router.get("/", getNotifications);
router.get("/:id", getNotification);
router.post("/", postNotifications);
router.put("/:id", putNotifications);
router.delete("/:id", deleteNotification);  

export default router;      
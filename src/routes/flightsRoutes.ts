import { Request, Response, Router } from "express";
//import every function from the controller
import { getFlights, getFlight} from "../controllers/Flights";
const router = Router();
 

router.get("/",getFlights);
router.get("/:id", getFlight);

export default router;      
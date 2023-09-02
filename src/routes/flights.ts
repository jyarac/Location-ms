import { Request, Response, Router } from "express";

const router = Router();
 

router.get("/Flights", (req: Request, res: Response) => {
    res.send({data: "Hello World!"});

    }
);

export { router };      
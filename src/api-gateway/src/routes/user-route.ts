import { Router } from "express";
import UserController from "../controllers/user-controller";
import "dotenv/config";

const user = process.env.USER_SERVICE_URL || "http://localhost:3000";
const router: Router = Router();

router.post("/", UserController.create);
// router.get("/", UserController.findAll);


export default router;
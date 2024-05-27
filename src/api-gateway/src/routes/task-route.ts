import { Router } from "express";
import TaskController from "../controllers/task-controller";
import authValidation from "../middlewares/jwt-middleware";
import { Response, Request } from "express";

const router: Router = Router();

router.get("/user", authValidation, TaskController.getByUserId);
router.get("/:id", authValidation, TaskController.getById);
router.get("/", authValidation, TaskController.getAll);

router.post("/create", authValidation, TaskController.create);
router.patch("/edit/:id", authValidation, TaskController.update);
router.delete("/delete/:id", authValidation, TaskController.delete);

export default router;

import { Router } from "express";
import TaskController from "../controllers/task-controller";
import authValidation from "../middlewares/jwt-middleware";

const router: Router = Router();

router.get("/", authValidation, TaskController.getAll);
router.get("/:id",authValidation , TaskController.getById);
router.post("/create", authValidation, TaskController.create);
router.patch("/edit/:id", authValidation, TaskController.update);
router.delete("/delete/:id", authValidation, TaskController.delete);


export default router;

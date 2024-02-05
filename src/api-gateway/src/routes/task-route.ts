import { Router } from "express";
import TaskController from "../controllers/task-controller";

const router: Router = Router();

router.get("/", TaskController.getAll);
router.get("/:id", TaskController.getById);
router.post("/create", TaskController.create);
router.patch("/edit/:id", TaskController.update);
router.delete("/delete/:id", TaskController.delete);


export default router;

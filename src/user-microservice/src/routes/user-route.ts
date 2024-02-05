import { Router } from "express";
import userController from "../controllers/user-controller";

const router: Router = Router();

// Registro de usuario
router.post("/", userController.create);
router.post("/login", userController.logIn);
router.patch("/edit", userController.update);
router.delete("/delete/:id", userController.delete);
router.get("/getAll", userController.getAllUsers);
router.get("/get/:id", userController.getUserById);

export default router;

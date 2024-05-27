import { Router } from "express";
import userController from "../controllers/user-controller";

const router: Router = Router();

// Registro de usuario
router.post("/", userController.create);
router.get("/auth", userController.auth)
router.post("/login", userController.logIn);
router.patch("/edit/:id", userController.update);
router.delete("/delete/:id", userController.delete);
router.get("/getAll", userController.getAllUsers);
router.get("/get/:id", userController.getUserById);

export default router;

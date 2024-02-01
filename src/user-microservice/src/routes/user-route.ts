import { Router } from "express";
import userController from "../controllers/user-controller";

const router: Router = Router();

// Registro de usuario
router.post("/", userController.create);
// Inicio de sesión
router.post("/login", userController.logIn);
// Actualizar datos
router.patch("/edit", userController.update);
// Eliminar datos de usuario
router.delete("/delete", userController.delete);

export default router;

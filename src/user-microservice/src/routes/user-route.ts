import { Router } from "express";
import userController from '../controllers/user-controller';

const router: Router = Router();

// registro de usuario
router.post("/", userController.create);
// inicio de sesion
router.post('/login', userController.logIn);
// update data
router.patch('/edit', userController.update);
// delete user data
router.delete('/delete', userController.delete);

export default router;
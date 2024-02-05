import { Router } from "express";
import userController from "../controllers/user-controller";
import authValidation from "../middlewares/jwt-middleware";

const router: Router = Router();

router.post("/", userController.create);
router.post("/login", userController.login);
router.patch("/edit/:id", authValidation, userController.update);
router.delete("/delete/:id", authValidation, userController.delete);
router.get("/getAll", authValidation,userController.getAllUsers);
router.get("/get/:id",authValidation, userController.getUserById);


export default router;
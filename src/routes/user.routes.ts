import { Router } from "express";
import { UserController } from "../controller/UserController";

const userRoutes = Router();

userRoutes.get("/", UserController.getAllUsers);
userRoutes.get("/:id", UserController.getUserById);
userRoutes.post("/authenticate", UserController.findUser);

export default userRoutes;
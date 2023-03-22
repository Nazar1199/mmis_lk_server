import { Router } from "express";
import { TypeGosController } from "../controller/TypeGosController";

const typegosRoutes = Router();

typegosRoutes.get("/", TypeGosController.getAllTypeGos);
typegosRoutes.get("/:id", TypeGosController.getTypeGosById);
typegosRoutes.post("/", TypeGosController.createTypeCmpt);

export default typegosRoutes;
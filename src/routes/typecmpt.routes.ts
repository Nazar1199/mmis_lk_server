import { Router } from "express";
import { TypeCmptController } from "../controller/TypeCmptController";

const typecmptRoutes = Router();

typecmptRoutes.get("/", TypeCmptController.getAllTypesCmpt);
typecmptRoutes.get("/:id", TypeCmptController.getTypeCmptById);
typecmptRoutes.post("/", TypeCmptController.createTypeCmpt);

export default typecmptRoutes;
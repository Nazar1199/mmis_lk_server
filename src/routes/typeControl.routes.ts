import { Router } from "express";
import { TypeControlController } from "../controller/TypeControlController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const TypeControlRoutes = Router();

TypeControlRoutes.get("/", checkJwtAuth, TypeControlController.getAllTypeControls);
TypeControlRoutes.get("/:id", checkJwtAuth, TypeControlController.getTypeControlById);
TypeControlRoutes.post("/", checkJwtAdmin, TypeControlController.createTypeControl);
TypeControlRoutes.put("/:id", checkJwtAdmin, TypeControlController.saveTypeControl);
TypeControlRoutes.delete("/:id", checkJwtAdmin, TypeControlController.deleteTypeControl);

export default TypeControlRoutes;
import { Router } from "express";
import { TypeEduSpaceController } from "../controller/TypeEduSpaceController";

const typeEduSpaseRoutes = Router();

typeEduSpaseRoutes.get("/", TypeEduSpaceController.getAllTypeEduSpace);
typeEduSpaseRoutes.get("/:id", TypeEduSpaceController.getTypeEduSpaceById);
typeEduSpaseRoutes.post("/", TypeEduSpaceController.createTypeEduSpace);
typeEduSpaseRoutes.put("/:id", TypeEduSpaceController.saveTypeEduSpace);
typeEduSpaseRoutes.delete("/:id", TypeEduSpaceController.deleteTypeEduSpace);

export default typeEduSpaseRoutes;
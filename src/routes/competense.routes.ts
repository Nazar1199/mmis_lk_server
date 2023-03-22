import { Router } from "express";
import { CompetenseController } from "../controller/CompetenseController";

const cmptRoutes = Router();

cmptRoutes.get("/", CompetenseController.getAllCmpt);
cmptRoutes.get("/:id", CompetenseController.getCmptById);
cmptRoutes.post("/",CompetenseController.createCmpt)
cmptRoutes.put("/:id", CompetenseController.saveCmpt);
cmptRoutes.delete("/:id", CompetenseController.deleteCmpt);

export default cmptRoutes;
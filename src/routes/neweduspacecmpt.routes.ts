import { Router } from "express";
import { NewEduSpaceCmptController } from "../controller/NewEduSpaceCmptController";

const newEduSpaceCmptRoutes = Router();

newEduSpaceCmptRoutes.get("/cmpts", NewEduSpaceCmptController.getAllCmptsForNewEduSpace);
newEduSpaceCmptRoutes.get("/neweduspaces", NewEduSpaceCmptController.getAllNewEduSpacesForCmpt);
newEduSpaceCmptRoutes.post("/",NewEduSpaceCmptController.createNewEduSpaceCmpt)
newEduSpaceCmptRoutes.put("/", NewEduSpaceCmptController.saveNewEduSpaceCmpt);
newEduSpaceCmptRoutes.delete("/:id", NewEduSpaceCmptController.deleteNewEduSpaceCmpt);

export default newEduSpaceCmptRoutes;
import { Router } from "express";
import { ReferenceController } from "../controller/ReferenceController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const ReferenceRoutes = Router();

ReferenceRoutes.get("/", checkJwtAuth, ReferenceController.getAllReferences);
ReferenceRoutes.get("/:id", checkJwtAuth, ReferenceController.getReferenceById);
ReferenceRoutes.post("/", checkJwtAdmin, ReferenceController.createReference);
ReferenceRoutes.put("/:id", checkJwtAdmin, ReferenceController.saveReference);
ReferenceRoutes.delete("/:id", checkJwtAdmin, ReferenceController.deleteReference);

export default ReferenceRoutes;
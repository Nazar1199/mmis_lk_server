import { Router } from "express";
import { ReferenceController } from "../controller/ReferenceController";

const ReferenceRoutes = Router();

ReferenceRoutes.get("/", ReferenceController.getAllReferences);
ReferenceRoutes.get("/:id", ReferenceController.getReferenceById);
ReferenceRoutes.post("/", ReferenceController.createReference);
ReferenceRoutes.put("/:id", ReferenceController.saveReference);
ReferenceRoutes.delete("/:id", ReferenceController.deleteReference);

export default ReferenceRoutes;
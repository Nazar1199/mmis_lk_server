import { Router } from "express";
import { EduFormController } from "../controller/EduFormController";

const eduFormRoutes = Router();

eduFormRoutes.get("/", EduFormController.getAllEduForm);
eduFormRoutes.get("/:id", EduFormController.getEduFormById);
eduFormRoutes.post("/", EduFormController.createEduForm);

export default eduFormRoutes;
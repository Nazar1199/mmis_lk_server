import { Router } from "express";
import { DisciplineController } from "../controller/DisciplineController";

const DisciplineRoutes = Router();

DisciplineRoutes.get("/", DisciplineController.getAllDisciplines);
DisciplineRoutes.get("/:id", DisciplineController.getDisciplineById);
DisciplineRoutes.post("/", DisciplineController.createDiscipline);
DisciplineRoutes.put("/:id", DisciplineController.saveDiscipline);
DisciplineRoutes.delete("/:id", DisciplineController.deleteDiscipline);

export default DisciplineRoutes;
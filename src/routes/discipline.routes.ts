import { Router } from "express";
import { DisciplineController } from "../controller/DisciplineController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const DisciplineRoutes = Router();

DisciplineRoutes.get("/", checkJwtAuth, DisciplineController.getAllDisciplines);
DisciplineRoutes.get("/:id", checkJwtAuth, DisciplineController.getDisciplineById);
DisciplineRoutes.post("/", checkJwtAdmin, DisciplineController.createDiscipline);
DisciplineRoutes.put("/:id", checkJwtAdmin, DisciplineController.saveDiscipline);
DisciplineRoutes.delete("/:id", checkJwtAdmin, DisciplineController.deleteDiscipline);

export default DisciplineRoutes;
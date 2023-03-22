import { Router } from "express";
import { ProgrammController } from "../controller/ProgrammController";

const programmRoutes = Router();

programmRoutes.get("/", ProgrammController.getAllProgramms);
programmRoutes.get("/:id", ProgrammController.getProgrammById);
programmRoutes.post("/",ProgrammController.createProgramm)
programmRoutes.put("/:id", ProgrammController.saveProgramm);
programmRoutes.delete("/:id", ProgrammController.deleteProgramm);

export default programmRoutes;
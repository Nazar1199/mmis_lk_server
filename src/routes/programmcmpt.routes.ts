import { Router } from "express";
import { ProgrammCmptController } from "../controller/ProgrammCmptController";

const progCmptRoutes = Router();

progCmptRoutes.get("/cmpt", ProgrammCmptController.getAllCmptForProgramm);
progCmptRoutes.get("/programm", ProgrammCmptController.getAllProgrammForCmpt);
progCmptRoutes.post("/",ProgrammCmptController.createProgrammCmpt);
progCmptRoutes.put("/", ProgrammCmptController.saveProgrammCmpt);
progCmptRoutes.delete("/:id", ProgrammCmptController.deleteProgrammCmpt);

export default progCmptRoutes;
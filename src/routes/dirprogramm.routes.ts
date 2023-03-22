import { Router } from "express";
import { DirectoryProgrammController } from "../controller/DirectoryProgrammController";

const dirprogrammRoutes = Router();

dirprogrammRoutes.get("/", DirectoryProgrammController.getAllDirProgramms);
dirprogrammRoutes.get("/:id", DirectoryProgrammController.getDirProgrammById);
dirprogrammRoutes.post("/", DirectoryProgrammController.createDirProgramm);

export default dirprogrammRoutes;
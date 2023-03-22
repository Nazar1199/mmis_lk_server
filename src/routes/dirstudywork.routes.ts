import { Router } from "express";
import { DirectoryStudyWorkController } from "../controller/DirectoryStudyWorkController";

const dirStudyWorkRoutes = Router();

dirStudyWorkRoutes.get("/", DirectoryStudyWorkController.getAllStudyWork);
dirStudyWorkRoutes.get("/:id", DirectoryStudyWorkController.getStudyWorkById);
dirStudyWorkRoutes.post("/", DirectoryStudyWorkController.createStudyWork);
dirStudyWorkRoutes.put("/:id", DirectoryStudyWorkController.saveStudyWork);
dirStudyWorkRoutes.delete("/:id", DirectoryStudyWorkController.deleteStudyWork);


export default dirStudyWorkRoutes;
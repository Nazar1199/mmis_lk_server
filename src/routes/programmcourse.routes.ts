import { Router } from "express";
import { ProgrammCourseController } from "../controller/ProgrammCourseController";

const progCourseRoutes = Router();

progCourseRoutes.get("/course", ProgrammCourseController.getAllCourseForProgramm);
progCourseRoutes.get("/programm", ProgrammCourseController.getAllProgrammForCourse);
progCourseRoutes.post("/",ProgrammCourseController.createProgrammCourse)
progCourseRoutes.put("/", ProgrammCourseController.saveProgrammCourse);
progCourseRoutes.delete("/:id", ProgrammCourseController.deleteProgrammCourse);

export default progCourseRoutes;
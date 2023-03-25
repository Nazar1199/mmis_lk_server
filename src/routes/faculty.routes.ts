import { Router } from "express";
import { FacultyController } from "../controller/FacultyController";

const FacultyRoutes = Router();

FacultyRoutes.get("/", FacultyController.getAllFacultys);
FacultyRoutes.get("/:id", FacultyController.getFacultyById);
FacultyRoutes.post("/", FacultyController.createFaculty);
FacultyRoutes.put("/:id", FacultyController.saveFaculty);
FacultyRoutes.delete("/:id", FacultyController.deleteFaculty);

export default FacultyRoutes;
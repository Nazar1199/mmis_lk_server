import { Router } from "express";
import { FacultyController } from "../controller/FacultyController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const FacultyRoutes = Router();

FacultyRoutes.get("/", checkJwtAuth, FacultyController.getAllFacultys);
FacultyRoutes.get("/:id", checkJwtAuth, FacultyController.getFacultyById);
FacultyRoutes.post("/", checkJwtAdmin, FacultyController.createFaculty);
FacultyRoutes.put("/:id", checkJwtAdmin, FacultyController.saveFaculty);
FacultyRoutes.delete("/:id", checkJwtAdmin, FacultyController.deleteFaculty);

export default FacultyRoutes;
import { Router } from "express";
import { TimetableController } from "../controller/TimetableController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const TimetableRoutes = Router();

TimetableRoutes.get("/", checkJwtAuth, TimetableController.getAllTimetables);
TimetableRoutes.get("/:id", checkJwtAuth, TimetableController.getTimetableById);
TimetableRoutes.get("/auditorium/:id", checkJwtAuth, TimetableController.getAllTimetablesForAuditorium);
TimetableRoutes.get("/discipline/:id", checkJwtAuth, TimetableController.getAllTimetablesForDiscipline);
TimetableRoutes.get("/group/:id", checkJwtAuth, TimetableController.getAllTimetablesForGroup);
TimetableRoutes.get("/teacher/:id", checkJwtAuth, TimetableController.getAllTimetablesForTeacher);
TimetableRoutes.post("/", checkJwtAdmin, TimetableController.createTimetable);
TimetableRoutes.put("/:id", checkJwtAdmin, TimetableController.saveTimetable);
TimetableRoutes.delete("/:id", checkJwtAdmin, TimetableController.deleteTimetable);

export default TimetableRoutes;
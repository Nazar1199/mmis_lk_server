import { Router } from "express";
import { TimetableController } from "../controller/TimetableController";

const TimetableRoutes = Router();

TimetableRoutes.get("/", TimetableController.getAllTimetables);
TimetableRoutes.get("/:id", TimetableController.getTimetableById);
TimetableRoutes.get("/auditorium/:id", TimetableController.getAllTimetablesForAuditorium);
TimetableRoutes.get("/discipline/:id", TimetableController.getAllTimetablesForDiscipline);
TimetableRoutes.get("/group/:id", TimetableController.getAllTimetablesForGroup);
TimetableRoutes.get("/teacher/:id", TimetableController.getAllTimetablesForTeacher);
TimetableRoutes.post("/", TimetableController.createTimetable);
TimetableRoutes.put("/:id", TimetableController.saveTimetable);
TimetableRoutes.delete("/:id", TimetableController.deleteTimetable);

export default TimetableRoutes;
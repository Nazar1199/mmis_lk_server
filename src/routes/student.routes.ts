import { Router } from "express";
import { StudentController } from "../controller/StudentController";

const StudentRoutes = Router();

StudentRoutes.get("/", StudentController.getAllStudents);
StudentRoutes.get("/:id", StudentController.getStudentById);
StudentRoutes.get("/group/:id", StudentController.getAllStudentsForGroup);
StudentRoutes.post("/", StudentController.createStudent);
StudentRoutes.put("/:id", StudentController.saveStudent);
StudentRoutes.delete("/:id", StudentController.deleteStudent);

export default StudentRoutes;
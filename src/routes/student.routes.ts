import { Router } from "express";
import { StudentController } from "../controller/StudentController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const StudentRoutes = Router();

StudentRoutes.get("/", checkJwtAdmin, StudentController.getAllStudents);
StudentRoutes.get("/me", checkJwtAuth, StudentController.getStudentMe);
StudentRoutes.get("/:id", checkJwtAdmin, StudentController.getStudentById);
StudentRoutes.get("/group/:id", checkJwtAdmin, StudentController.getAllStudentsForGroup);
StudentRoutes.post("/", checkJwtAdmin, StudentController.createStudent);
StudentRoutes.put("/:id", checkJwtAdmin, StudentController.saveStudent);
StudentRoutes.delete("/:id", checkJwtAdmin, StudentController.deleteStudent);

export default StudentRoutes;
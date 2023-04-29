import { Router } from "express";
import { TeacherController } from "../controller/TeacherController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const TeacherRoutes = Router();

TeacherRoutes.get("/", checkJwtAuth, TeacherController.getAllTeacheres);
TeacherRoutes.get("/:id", checkJwtAuth, TeacherController.getTeacherById);
TeacherRoutes.post("/", checkJwtAdmin, TeacherController.createTeacher);
TeacherRoutes.put("/:id", checkJwtAdmin, TeacherController.saveTeacher);
TeacherRoutes.delete("/:id", checkJwtAdmin, TeacherController.deleteTeacher);

export default TeacherRoutes;
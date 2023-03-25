import { Router } from "express";
import { TeacherController } from "../controller/TeacherController";

const TeacherRoutes = Router();

TeacherRoutes.get("/", TeacherController.getAllTeacheres);
TeacherRoutes.get("/:id", TeacherController.getTeacherById);
TeacherRoutes.post("/", TeacherController.createTeacher);
TeacherRoutes.put("/:id", TeacherController.saveTeacher);
TeacherRoutes.delete("/:id", TeacherController.deleteTeacher);

export default TeacherRoutes;
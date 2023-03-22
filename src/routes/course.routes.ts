import { Router } from "express";
import {CourseController} from "../controller/CourseController";

const courseRoutes = Router();

courseRoutes.get("/", CourseController.getAllCourses);
courseRoutes.get("/:id", CourseController.getCourseById);
courseRoutes.post("/",CourseController.createCourse);
courseRoutes.put("/:id", CourseController.saveCourse);
courseRoutes.delete("/:id", CourseController.deleteCourse);

export default courseRoutes;
import { Router } from "express";
import {CourseController} from "../controller/CourseController";

const courseRoutes = Router();
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

courseRoutes.get("/", checkJwtAuth, CourseController.getAllCourses);
courseRoutes.get("/:id", checkJwtAuth, CourseController.getCourseById);
courseRoutes.post("/", checkJwtAdmin,CourseController.createCourse);
courseRoutes.put("/:id", checkJwtAdmin, CourseController.saveCourse);
courseRoutes.delete("/:id", checkJwtAdmin, CourseController.deleteCourse);

export default courseRoutes;
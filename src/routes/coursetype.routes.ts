import { Router } from "express";
import { CourseTypeController } from "../controller/CourseTypeController";

const courseTypeRoutes = Router();

courseTypeRoutes.get("/", CourseTypeController.getAllTypeCourse);
courseTypeRoutes.get("/:id", CourseTypeController.getTypeCourseById);
courseTypeRoutes.post("/", CourseTypeController.createTypeCourse);


export default courseTypeRoutes;
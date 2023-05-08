import { Router } from "express";
import { LessonTimeController } from "../controller/LessonTimeController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const LessonTimeRoutes = Router();

LessonTimeRoutes.get("/", checkJwtAuth, LessonTimeController.getAllLessonTimes);
LessonTimeRoutes.get("/:id", checkJwtAuth, LessonTimeController.getLessonTimeById);
LessonTimeRoutes.post("/", checkJwtAdmin, LessonTimeController.createLessonTime);
LessonTimeRoutes.put("/:id", checkJwtAdmin, LessonTimeController.saveLessonTime);
LessonTimeRoutes.delete("/:id", checkJwtAdmin, LessonTimeController.deleteLessonTime);

export default LessonTimeRoutes;
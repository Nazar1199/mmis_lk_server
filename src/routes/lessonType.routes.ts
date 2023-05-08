import { Router } from "express";
import { LessonTypeController } from "../controller/LessonTypeController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const LessonTypeRoutes = Router();

LessonTypeRoutes.get("/", checkJwtAuth, LessonTypeController.getAllLessonTypes);
LessonTypeRoutes.get("/:id", checkJwtAuth, LessonTypeController.getLessonTypeById);
LessonTypeRoutes.post("/", checkJwtAdmin, LessonTypeController.createLessonType);
LessonTypeRoutes.put("/:id", checkJwtAdmin, LessonTypeController.saveLessonType);
LessonTypeRoutes.delete("/:id", checkJwtAdmin, LessonTypeController.deleteLessonType);

export default LessonTypeRoutes;
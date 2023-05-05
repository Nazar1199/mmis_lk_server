import { Router } from "express";
import { AuditoriumController } from "../controller/AuditoriumController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const AuditoriumRoutes = Router();

AuditoriumRoutes.get("/", checkJwtAuth, AuditoriumController.getAllAuditoriums);
AuditoriumRoutes.get("/:id", checkJwtAuth, AuditoriumController.getAuditoriumById);
AuditoriumRoutes.post("/", checkJwtAdmin, AuditoriumController.createAuditorium);
AuditoriumRoutes.put("/:id", checkJwtAdmin, AuditoriumController.saveAuditorium);
AuditoriumRoutes.delete("/:id", checkJwtAdmin, AuditoriumController.deleteAuditorium);

export default AuditoriumRoutes;
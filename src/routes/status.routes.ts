import { Router } from "express";
import { StatusController } from "../controller/StatusController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const StatusRoutes = Router();

StatusRoutes.get("/", checkJwtAuth, StatusController.getAllStatuses);
StatusRoutes.get("/:id", checkJwtAuth, StatusController.getStatusById);
StatusRoutes.post("/", checkJwtAdmin, StatusController.createStatus);
StatusRoutes.put("/:id", checkJwtAdmin, StatusController.saveStatus);
StatusRoutes.delete("/:id", checkJwtAdmin, StatusController.deleteStatus);

export default StatusRoutes;
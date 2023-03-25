import { Router } from "express";
import { StatusController } from "../controller/StatusController";

const StatusRoutes = Router();

StatusRoutes.get("/", StatusController.getAllStatuses);
StatusRoutes.get("/:id", StatusController.getStatusById);
StatusRoutes.post("/", StatusController.createStatus);
StatusRoutes.put("/:id", StatusController.saveStatus);
StatusRoutes.delete("/:id", StatusController.deleteStatus);

export default StatusRoutes;
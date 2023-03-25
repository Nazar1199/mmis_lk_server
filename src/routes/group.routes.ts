import { Router } from "express";
import { GroupController } from "../controller/GroupController";

const GroupRoutes = Router();

GroupRoutes.get("/", GroupController.getAllGroupes);
GroupRoutes.get("/:id", GroupController.getGroupById);
GroupRoutes.post("/", GroupController.createGroup);
GroupRoutes.put("/:id", GroupController.saveGroup);
GroupRoutes.delete("/:id", GroupController.deleteGroup);

export default GroupRoutes;
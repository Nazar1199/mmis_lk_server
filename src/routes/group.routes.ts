import { Router } from "express";
import { GroupController } from "../controller/GroupController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const GroupRoutes = Router();

GroupRoutes.get("/", checkJwtAuth, GroupController.getAllGroupes);
GroupRoutes.get("/:id", checkJwtAuth, GroupController.getGroupById);
GroupRoutes.post("/", checkJwtAdmin, GroupController.createGroup);
GroupRoutes.put("/:id", checkJwtAdmin, GroupController.saveGroup);
GroupRoutes.delete("/:id", checkJwtAdmin, GroupController.deleteGroup);

export default GroupRoutes;
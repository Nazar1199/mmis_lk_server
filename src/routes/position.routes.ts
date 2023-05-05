import { Router } from "express";
import { PositionController } from "../controller/PositionController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const PositionRoutes = Router();

PositionRoutes.get("/", checkJwtAuth, PositionController.getAllPositions);
PositionRoutes.get("/:id", checkJwtAuth, PositionController.getPositionById);
PositionRoutes.post("/", checkJwtAdmin, PositionController.createPosition);
PositionRoutes.put("/:id", checkJwtAdmin, PositionController.savePosition);
PositionRoutes.delete("/:id", checkJwtAdmin, PositionController.deletePosition);

export default PositionRoutes;
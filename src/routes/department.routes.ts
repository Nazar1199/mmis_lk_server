import { Router } from "express";
import { DepartmentController } from "../controller/DepartmentController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const DepartmentRoutes = Router();

DepartmentRoutes.get("/", checkJwtAuth, DepartmentController.getAllDepartments);
DepartmentRoutes.get("/:id", checkJwtAuth, DepartmentController.getDepartmentById);
DepartmentRoutes.post("/", checkJwtAdmin, DepartmentController.createDepartment);
DepartmentRoutes.put("/:id", checkJwtAdmin, DepartmentController.saveDepartment);
DepartmentRoutes.delete("/:id", checkJwtAdmin, DepartmentController.deleteDepartment);

export default DepartmentRoutes;
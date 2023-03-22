import { Router } from "express";
import { NewEduSpaceController } from "../controller/NewEduSpaceController";

const eduSpaseRoutes = Router();

eduSpaseRoutes.get("/", NewEduSpaceController.getAllNewEduSpaces);
eduSpaseRoutes.get("/courses", NewEduSpaceController.getAllCoursesForES);
eduSpaseRoutes.post("/", NewEduSpaceController.createNewEduSpace);
eduSpaseRoutes.put("/:id", NewEduSpaceController.saveNewEduSpace);
eduSpaseRoutes.delete("/:id", NewEduSpaceController.deleteNewEduSpace);

export default eduSpaseRoutes;
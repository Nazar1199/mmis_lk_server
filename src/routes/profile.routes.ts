import { Router } from "express";
import { ProfileController } from "../controller/ProfileController";
import checkJwtAuth from "../middleware/jwt";

const ProfileRoutes = Router();

ProfileRoutes.get("/:id", checkJwtAuth, ProfileController.getProfileById);
ProfileRoutes.post("/login", ProfileController.login);
ProfileRoutes.post("/registration", ProfileController.registration)
ProfileRoutes.post("/", checkJwtAuth, ProfileController.createProfile);
ProfileRoutes.put("/:id", checkJwtAuth, ProfileController.saveProfile);
ProfileRoutes.delete("/:id", checkJwtAuth, ProfileController.deleteProfile);

export default ProfileRoutes;
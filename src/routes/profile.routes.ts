import { Router } from "express";
import { ProfileController } from "../controller/ProfileController";
import checkJwtAuth from "../middleware/jwt";
import checkJwtAdmin from "../middleware/jwtAdmin";

const ProfileRoutes = Router();

ProfileRoutes.get("/:id", checkJwtAdmin, ProfileController.getProfileById);
ProfileRoutes.post("/login", ProfileController.login);
ProfileRoutes.post("/registration", checkJwtAdmin, ProfileController.registration)
ProfileRoutes.post("/", checkJwtAdmin, ProfileController.createProfile);
ProfileRoutes.put("/:id", checkJwtAdmin, ProfileController.saveProfile);
ProfileRoutes.delete("/:id", checkJwtAdmin, ProfileController.deleteProfile);

export default ProfileRoutes;
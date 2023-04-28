import { Router } from "express";
import { ProfileController } from "../controller/ProfileController";

const ProfileRoutes = Router();

ProfileRoutes.get("/:id", ProfileController.getProfileById);
ProfileRoutes.post("/login", ProfileController.login);
ProfileRoutes.post("/registration", ProfileController.registration)
ProfileRoutes.post("/", ProfileController.createProfile);
ProfileRoutes.put("/:id", ProfileController.saveProfile);
ProfileRoutes.delete("/:id", ProfileController.deleteProfile);

export default ProfileRoutes;
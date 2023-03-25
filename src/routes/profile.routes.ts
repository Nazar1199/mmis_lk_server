import { Router } from "express";
import { ProfileController } from "../controller/ProfileController";

const ProfileRoutes = Router();

ProfileRoutes.get("/:id", ProfileController.getProfileById);
ProfileRoutes.post("/", ProfileController.createProfile);
ProfileRoutes.put("/:id", ProfileController.saveProfile);
ProfileRoutes.delete("/:id", ProfileController.deleteProfile);

export default ProfileRoutes;
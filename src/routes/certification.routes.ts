import { Router } from "express";
import { CertificationController } from "../controller/CertificationController";

const CertificationRoutes = Router();
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

CertificationRoutes.get("/", checkJwtAdmin, CertificationController.getAllCertifications);
CertificationRoutes.get("/:id", checkJwtAdmin, CertificationController.getCertificationById);
CertificationRoutes.get("/group/:id", checkJwtAdmin, CertificationController.getAllCertificationsForGroup);
CertificationRoutes.get("/student/:id", checkJwtAdmin, CertificationController.getAllCertificationsForStudent);
CertificationRoutes.post("/", checkJwtAdmin,CertificationController.createCertification)
CertificationRoutes.put("/:id", checkJwtAdmin, CertificationController.saveCertification);
CertificationRoutes.delete("/:id", checkJwtAdmin, CertificationController.deleteCertification);

export default CertificationRoutes;
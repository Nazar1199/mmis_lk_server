import { Router } from "express";
import { CertificationController } from "../controller/CertificationController";

const CertificationRoutes = Router();

CertificationRoutes.get("/", CertificationController.getAllCertifications);
CertificationRoutes.get("/:id", CertificationController.getCertificationById);
CertificationRoutes.get("/group/:id", CertificationController.getAllCertificationsForGroup);
CertificationRoutes.get("/student/:id", CertificationController.getAllCertificationsForStudent);
CertificationRoutes.post("/",CertificationController.createCertification)
CertificationRoutes.put("/:id", CertificationController.saveCertification);
CertificationRoutes.delete("/:id", CertificationController.deleteCertification);

export default CertificationRoutes;
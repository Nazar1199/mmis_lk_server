import { getRepository } from "typeorm";
import { Certification } from "../entity/Certification";

class CertificationService {
    createCertification = async (certification: Certification) => {
        let createCertification = getRepository(Certification).create(certification);
        let result = await getRepository(Certification).save(createCertification);
        return result;
    }

    getAllCertifications = async () => {
        let allCertifications = await getRepository(Certification).find(); 
        console.log("Certifications: " + JSON.stringify(allCertifications));
        return allCertifications;
    }

    getCertificationById = async(id: number) => {
        if(!id) return;
        let certification = await getRepository(Certification).findOne(id);
        return certification;
    }

    saveCertification = async(certification: Certification) => {
        if(!certification) return;
        let saveCertification = await getRepository(Certification).save(certification);
        return saveCertification;
    }

    deleteCertification = async(id: number) => {
        if(!id) return;
        return await getRepository(Certification).delete(id);
    }
}

export default new CertificationService();
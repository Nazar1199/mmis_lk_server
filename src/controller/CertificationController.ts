import {NextFunction, Request, Response} from "express";
import CertificationService from "../services/CertificationService";
import ProfileService from "../services/ProfileService";

export class CertificationController {
    static createCertification = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let certification = await CertificationService.createCertification(request.body);
            response.status(200).send(certification);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании новой оценки: " + error);
        }                
    }

    static getAllCertifications = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let allCertification = await CertificationService.getAllCertifications();
            response.status(200).send(allCertification);
            console.log("getAllCertification: " + JSON.stringify(allCertification));
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список оценок: " + error);
        }         
    }

    static getCertificationById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о оценке");
            }
            let certification = await CertificationService.getCertificationById(request.params.id);
            response.status(200).send(certification);
        } catch(error) {
            response.status(500).send("Не удалось получить оценку: " + error);
        }
    }

    static getAllCertificationsForStudent = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.student) {
                throw new Error("Не удалось получить информацию о оценках студента");
            }
            let certifications = await CertificationService.getAllCertificationsForStudent(request.params.student);
            response.status(200).send(certifications);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о оценках студента: " + error);
        }
    }

    static getAllCertificationsForMe = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.headers.id) {
                throw new Error("Не удалось получить информацию о оценках студента");
            }
            console.log("Id profile: " + request.headers.id);
            request.headers.id = await ProfileService.getMyStudentId(request.headers.id);
            console.log("Id student: " + request.headers.id);
            let certifications = await CertificationService.getAllCertificationsForStudent(request.headers.id);
            response.status(200).send(certifications);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о оценках студента: " + error);
        }
    }

    static getAllCertificationsForGroup = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.group) {
                throw new Error("Не удалось получить информацию о оценках группы");
            }
            let certifications = await CertificationService.getAllCertificationsForGroup(request.params.group);
            response.status(200).send(certifications);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о оценках группы: " + error);
        }
    }

    static saveCertification = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let certification = await CertificationService.saveCertification(request.body);
            response.status(200).send(certification);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о оценке: " + error);
        }         
    }

    static deleteCertification = async(request: Request, response: Response, next: NextFunction) => {    
        try {
            await CertificationService.deleteCertification(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить оценку: " + error);
        }         
    }
}
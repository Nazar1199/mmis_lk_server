import {NextFunction, Request, Response} from "express";
import CertificationService from "../services/CertificationService";

export class CertificationController {
    static createCertification = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let cmpt = await CertificationService.createCertification(request.body);
            response.status(200).send(cmpt);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании новой оценки: " + error);
        }                
    }

    static getAllCertification = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let allCertification = await CertificationService.getAllCertifications();
            response.status(200).send(allCertification);
            console.log("getAllCertification: " + JSON.stringify(allCertification));
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список оценок " + error);
        }         
    }

    static getCertificationById = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию о оценке");
        }
        try {
            let cmpt = await CertificationService.getCertificationById(request.params.id);
            response.status(200).send(cmpt);
        } catch(error) {
            response.status(500).send("Не удалось получить компетенцию " + error);
        }
    }

    static saveCertification = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let cmpt = await CertificationService.saveCertification(request.body);
            response.status(200).send(cmpt);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о оценке " + error);
        }         
    }

    static deleteCertification = async(request: Request, response: Response, next: NextFunction) => {    
        try {
            await CertificationService.deleteCertification(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить оценку " + error);
        }         
    }
}
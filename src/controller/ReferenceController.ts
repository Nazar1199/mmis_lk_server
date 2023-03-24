import {NextFunction, Request, Response} from "express";
import ReferenceService from "../services/ReferenceService";

export class ReferenceController {
    static createReference = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ReferenceService.createReference(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о новой справке: " + error);
        }                
    }

    static getAllReferences = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ReferenceService.getAllReferences();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список справок: " + error);
        }         
    }

    static getReferenceById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ReferenceService.getReferenceById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о справке: " + error);
        }
    }

    static saveReference = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let profile = await ReferenceService.saveReference(request.body);
            response.status(200).send(profile);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о справке: " + error);
        }         
    }

    static deleteReference = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ReferenceService.deleteReference(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить справку: " + error);
        }         
    }
}
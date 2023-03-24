import {NextFunction, Request, Response} from "express";
import StatusService from "../services/StatusService";

export class StatusController {
    static createStatus = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StatusService.createStatus(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось создать новый статус: " + error);
        }                
    }

    static getAllStatuses = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StatusService.getAllStatuses();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список статусов: " + error);
        }         
    }

    static getStatusById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StatusService.getStatusById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о статусе: " + error);
        }
    }

    static saveStatus = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let profile = await StatusService.saveStatus(request.body);
            response.status(200).send(profile);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о статусе: " + error);
        }         
    }

    static deleteStatus = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StatusService.deleteStatus(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить статус: " + error);
        }         
    }
}
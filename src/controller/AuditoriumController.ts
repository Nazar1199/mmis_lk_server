import {NextFunction, Request, Response} from "express";
import AuditoriumService from "../services/AuditoriumService";

export class AuditoriumController {
    static createAuditorium = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await AuditoriumService.createAuditorium(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось создать новую аудиторию: " + error);
        }                
    }

    static getAllAuditoriums = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await AuditoriumService.getAllAuditoriums();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список аудиторий: " + error);
        }         
    }

    static getAuditoriumById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await AuditoriumService.getAuditoriumById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о аудитории: " + error);
        }
    }

    static saveAuditorium = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let auditorium = await AuditoriumService.saveAuditorium(request.body);
            response.status(200).send(auditorium);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о аудитории: " + error);
        }         
    }

    static deleteAuditorium = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await AuditoriumService.deleteAuditorium(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить аудиторию: " + error);
        }         
    }
}
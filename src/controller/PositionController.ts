import {NextFunction, Request, Response} from "express";
import PositionService from "../services/PositionService";

export class PositionController {
    static createPosition = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await PositionService.createPosition(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось создать новую должность: " + error);
        }                
    }

    static getAllPositions = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await PositionService.getAllPositions();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список должностей: " + error);
        }         
    }

    static getPositionById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await PositionService.getPositionById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о должности: " + error);
        }
    }

    static savePosition = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let status = await PositionService.savePosition(request.body);
            response.status(200).send(status);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о должности: " + error);
        }
    }

    static deletePosition = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await PositionService.deletePosition(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить должность: " + error);
        }         
    }
}
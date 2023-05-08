import {NextFunction, Request, Response} from "express";
import TypeControlService from "../services/TypeControlService";

export class TypeControlController {
    static createTypeControl = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeControlService.createTypeControl(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось создать новый вид контроля: " + error);
        }                
    }

    static getAllTypeControls = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeControlService.getAllTypeControls();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список видов контроля: " + error);
        }         
    }

    static getTypeControlById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeControlService.getTypeControlById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о виде контроля: " + error);
        }
    }

    static saveTypeControl = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let status = await TypeControlService.saveTypeControl(request.body);
            response.status(200).send(status);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о виде контроля: " + error);
        }
    }

    static deleteTypeControl = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeControlService.deleteTypeControl(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить вид контроля: " + error);
        }         
    }
}
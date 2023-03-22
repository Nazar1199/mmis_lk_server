import {NextFunction, Request, Response} from "express";
import TypeEduSpaceService from "../services/TypeEduSpaceService";

export class TypeEduSpaceController {
    static createTypeEduSpace = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeEduSpaceService.createTypeEduSpace(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохранении типа образовательного пространства: " + error);
        }                
    }

    static getAllTypeEduSpace = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeEduSpaceService.getAllTypeEduSpace();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список типов образовательного пространства: " + error); 
        } 
    }

    static getTypeEduSpaceById = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию о типе образовательного пространства");
        }
        try {
            let result = await TypeEduSpaceService.getTypeEduSpaceById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о типе образовательного пространства: " + error); 
        } 
    }

    static saveTypeEduSpace = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeEduSpaceService.saveTypeEduSpace(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о типе образовательного пространства " + error);
        }         
    }

    static deleteTypeEduSpace = async(request: Request, response: Response, next: NextFunction) => {    
        if (!request.params.id) {
            throw new Error("Не удалось найти тип образовательного пространства, который требуется удалить");
        }
        try {
            await TypeEduSpaceService.deleteTypeEduSpace(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить тип образовательного пространства " + error);
        }         
    }
}
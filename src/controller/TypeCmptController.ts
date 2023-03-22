import {NextFunction, Request, Response} from "express";
import TypeCmptService from "../services/TypeCmptService";

export class TypeCmptController {
    static createTypeCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let typeCmpt = await TypeCmptService.createTypeCmpt(request.body);
            response.status(200).send(typeCmpt);
        } catch(error) {
            response.status(500).send("Ошибка при сохранении типа компетенции: " + error);
        }                
    }

    static getAllTypesCmpt = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let typesCmpt = await TypeCmptService.getAllTypeCmpt();
            response.status(200).send(typesCmpt);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список типов компетенций " + error);
        }         
    }

    static getTypeCmptById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let typeCmpt = await TypeCmptService.getTypeCmptById(request.params.id);
            response.status(200).send(typeCmpt);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить тип компетенции " + error);
        }
    }
}
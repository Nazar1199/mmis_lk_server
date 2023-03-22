import {NextFunction, Request, Response} from "express";
import CompetenseService from "../services/CompetenseService";

export class CompetenseController {
    static createCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let cmpt = await CompetenseService.createCmpt(request.body);
            response.status(200).send(cmpt);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании новой компетенции: " + error);
        }                
    }

    static getAllCmpt = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let allCmpt = await CompetenseService.getAllCmpt();
            response.status(200).send(allCmpt);
            console.log("getAllCmpt: " + JSON.stringify(allCmpt));
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список компетенций " + error);
        }         
    }

    static getCmptById = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию о компетенции");
        }
        try {
            let cmpt = await CompetenseService.getCmptById(request.params.id);
            response.status(200).send(cmpt);
        } catch(error) {
            response.status(500).send("Не удалось получить компетенцию " + error);
        }
    }

    static saveCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let cmpt = await CompetenseService.saveCmpt(request.body);
            response.status(200).send(cmpt);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о компетенции " + error);
        }         
    }

    static deleteCmpt = async(request: Request, response: Response, next: NextFunction) => {    
        try {
            await CompetenseService.deleteCompetense(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить компетенцию " + error);
        }         
    }
}
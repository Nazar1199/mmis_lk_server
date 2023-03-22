import {NextFunction, Request, Response} from "express";
import NewEduSpaceCmptService from "../services/NewEduSpaceCmptService";

export class NewEduSpaceCmptController {
    static createNewEduSpaceCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await NewEduSpaceCmptService.createNewEduSpaceCmpt(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании: " + error);
        }                
    }

    static getAllCmptsForNewEduSpace = async (request: Request, response: Response, next: NextFunction) => {
        try {     
            let result = await NewEduSpaceCmptService.getAllCmptsForNewEduSpace(request.body.newESId);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список компетенций " + error);
        }         
    }

    static getAllNewEduSpacesForCmpt = async (request: Request, response: Response, next: NextFunction) => {
        try {           
            let result = await NewEduSpaceCmptService.getAllNewEduSpacesForCmpt(request.body.cmptId);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список образовательных пространств " + error);
        }         
    }

    static saveNewEduSpaceCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await NewEduSpaceCmptService.saveNewEduSpaceCmpt(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании: " + error);
        }                
    }

    static deleteNewEduSpaceCmpt = async(request: Request, response: Response, next: NextFunction) => {    
        try {
            let result = await NewEduSpaceCmptService.getNewEduSpaceCmptById(request.params.id);
            console.log("newEduSpaceCmpt: " + JSON.stringify(result));
            await NewEduSpaceCmptService.deleteNewEduSpaceCmpt(result.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Ошибка при удалении " + error);
        }         
    }
}
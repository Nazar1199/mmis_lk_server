import {NextFunction, Request, Response} from "express";
import ProgrammCmptService from "../services/ProgrammCmptService";

export class ProgrammCmptController {
    static createProgrammCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProgrammCmptService.createProgrammCmpt(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании: " + error);
        }                
    }

    static getAllCmptForProgramm = async (request: Request, response: Response, next: NextFunction) => {
        try {     
            let result = await ProgrammCmptService.getAllCmptForProgramm(request.query.programmId);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список компетенций " + error);
        }         
    }

    static getAllProgrammForCmpt = async (request: Request, response: Response, next: NextFunction) => {
        try {           
            console.log("CmptId: " + request.body.cmptId);
            let result = await ProgrammCmptService.getAllProgrammForCmpt(request.body.cmptId);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список программ " + error);
        }         
    }

    static saveProgrammCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProgrammCmptService.saveProgrammCmpt(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании: " + error);
        }                
    }

    static deleteProgrammCmpt = async(request: Request, response: Response, next: NextFunction) => {    
        try {
            let result = await ProgrammCmptService.getProgCmptById(request.params.id);
            console.log("progCmpt: " + JSON.stringify(result));
            await ProgrammCmptService.deleteProgrammCmpt(result);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Ошибка при удалении закрепление " + error);
        }         
    }
}
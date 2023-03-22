import {NextFunction, Request, Response} from "express";
import DirectoryStudyWorcService from "../services/DirectoryStudyWorcService";

export class DirectoryStudyWorkController {
    static createStudyWork = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DirectoryStudyWorcService.createStudyWork(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllStudyWork = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DirectoryStudyWorcService.getAllStudyWorks();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getStudyWorkById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DirectoryStudyWorcService.getStudyWorkById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }

    static saveStudyWork = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DirectoryStudyWorcService.saveStudyWork(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static deleteStudyWork = async(request: Request, response: Response, next: NextFunction) => {    
        if (!request.params.id) {
            throw new Error("Не удалось найти вид учебной работы, который требуется удалить");
        }
        try {
            await DirectoryStudyWorcService.deleteStudyWork(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить вид учебной работы " + error);
        }         
    }
}
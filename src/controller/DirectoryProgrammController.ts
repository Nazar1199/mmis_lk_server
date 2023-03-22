import {NextFunction, Request, Response} from "express";
import DirectoryProgrammService from "../services/DirectoryProgrammService";

export class DirectoryProgrammController {
    static createDirProgramm = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let typeProgramm = await DirectoryProgrammService.createTypeProgramm(request.body);
            response.status(200).send(typeProgramm);
        } catch(error) {
            response.status(500).send("Ошибка при сохранении типа программы: " + error);
        }                
    }

    static getAllDirProgramms = async (request: Request, response: Response, next: NextFunction) => {
        try {
            console.log("type programms")
            let dirProgramms = await DirectoryProgrammService.getAllTypeProgramm();
            response.status(200).send(dirProgramms);
        } catch(error) {
            response.status(500).send("Не удалось получить список типов программы: " + error); 
        } 
    }

    static getDirProgrammById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let dirProgramm = await DirectoryProgrammService.getTypeProgrammById(request.params.id);
            response.status(200).send(dirProgramm);
        } catch(error) {
            response.status(500).send("Не удалось получить тип программы: " + error); 
        } 
    }
}
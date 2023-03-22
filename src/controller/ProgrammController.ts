import {NextFunction, Request, Response} from "express";
import { parse } from "querystring";
import ProgrammService from "../services/ProgrammService";


export class ProgrammController {

    static createProgramm = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let programm = await ProgrammService.createProgramm(request.body);
            response.status(201).send(programm);
        } catch(error) {
            response.status(500).send("Ошибка при сохранении образовательной программы: " + error);
        }                
    }
  
    static getAllProgramms = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let programms = await ProgrammService.getAllProgrammsList();
            //console.log("Data: " + JSON.stringify(programms, null, '\t'));
            response.status(200).send(programms);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список образовательных программ " + error);
        }         
    }

    static getProgrammById = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию об образовательной программе");
        }
        try {
            console.log("Id programm: " + request.params.id);
            let programm = await ProgrammService.getProgrammById(request.params.id);
            response.status(200).send(programm);
        } catch(error) {
            response.status(500).send("Не удалось получить образовательную программу " + error);
        }
    }
    static getProgrammByType = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let programms = await ProgrammService.getProgrammByType(request.params.dirProgramm);
            response.status(200).send(programms);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список образовательных программ " + error);
        }
    }  

    static saveProgramm = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let programm = await ProgrammService.saveProgramm(request.body);
            response.status(200).send(programm);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию об образовательной программе " + error);
        }         
    }

    static deleteProgramm = async(request: Request, response: Response, next: NextFunction) => {     
        if (!request.params.id) {
            throw new Error("Не удалось найти образовательную программу, которую требуется удалить");
        }
        try {
            await ProgrammService.deleteProgramm(request.params.id);
            response.status(200).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить образовательную программу");
        }         
    }
}
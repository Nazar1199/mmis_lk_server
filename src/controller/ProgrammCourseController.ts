import {NextFunction, Request, Response} from "express";
import ProgrammCourseService from "../services/ProgrammCourseService";

export class ProgrammCourseController {
    static createProgrammCourse = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProgrammCourseService.createProgCourse(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании: " + error);
        }                
    }

    static getAllCourseForProgramm = async (request: Request, response: Response, next: NextFunction) => {
        try {     
            let result = await ProgrammCourseService.getAllCourseForProgramm(request.query.programmId);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список курсов " + error);
        }         
    }

    static getAllProgrammForCourse = async (request: Request, response: Response, next: NextFunction) => {
        try {           
            let result = await ProgrammCourseService.getAllProgForCourse(request.body.cmptId);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список программ " + error);
        }         
    }

    static saveProgrammCourse = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProgrammCourseService.saveProgrammCourse(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании: " + error);
        }                
    }

    static deleteProgrammCourse = async(request: Request, response: Response, next: NextFunction) => {    
        try {
            let result = await ProgrammCourseService.getProgCourseById(request.params.id);
            console.log("progCourse: " + JSON.stringify(result));
            await ProgrammCourseService.deleteProgrammCourse(result.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Ошибка при удалении закрепление " + error);
        }         
    }
}
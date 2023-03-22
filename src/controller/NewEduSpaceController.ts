import {NextFunction, Request, Response} from "express";
import NewEduSpaceService from "../services/NewEduSpaceService";

export class NewEduSpaceController {
    static createNewEduSpace = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await NewEduSpaceService.createNewES(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохранении образовательного пространства: " + error);
        }                
    }

    static getAllCoursesForES = async (request: Request, response: Response, next: NextFunction) => {
        try {     
            let result = await NewEduSpaceService.getAllCoursesForES(request.query.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список курсов для образовательного пространства " + error);
        }         
    }

    static saveNewEduSpace = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await NewEduSpaceService.saveNewES(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию об образовательном пространстве " + error);
        }         
    }

    static deleteNewEduSpace = async(request: Request, response: Response, next: NextFunction) => {    
        if (!request.params.id) {
            throw new Error("Не удалось найти образовательное пространство, которое требуется удалить");
        }
        try {
            await NewEduSpaceService.deleteNewES(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить образовательное пространство " + error);
        }         
    }

    static getAllNewEduSpaces = async(request: Request, response: Response, next: NextFunction) => {    
        try {
            const result = await NewEduSpaceService.getAllNewES();
            response.status(200).send(result);
        } catch (error) {
            response.status(500).send("Не удалось найти образовательные пространства " + error);
        }         
    }
}
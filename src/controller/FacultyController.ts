import {NextFunction, Request, Response} from "express";
import FacultyService from "../services/FacultyService";

export class FacultyController {
    static createFaculty = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await FacultyService.createFaculty(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось добавить новый факультет: " + error);
        }                
    }

    static getAllFacultys = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await FacultyService.getAllFacultys();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список факультетов: " + error);
        }         
    }

    static getFacultyById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await FacultyService.getFacultyById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о факультете: " + error);
        }
    }

    static saveFaculty = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let profile = await FacultyService.saveFaculty(request.body);
            response.status(200).send(profile);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о факультете: " + error);
        }         
    }

    static deleteFaculty = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await FacultyService.deleteFaculty(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить факультет: " + error);
        }         
    }
}
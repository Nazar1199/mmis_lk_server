import {NextFunction, Request, Response} from "express";
import LessonTypeService from "../services/LessonTypeService";

export class LessonTypeController {
    static createLessonType = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTypeService.createLessonType(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось создать новый тип занятия: " + error);
        }                
    }

    static getAllLessonTypes = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTypeService.getAllLessonTypes();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список типов занятия: " + error);
        }         
    }

    static getLessonTypeById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTypeService.getLessonTypeById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о типе занятия: " + error);
        }
    }

    static saveLessonType = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let status = await LessonTypeService.saveLessonType(request.body);
            response.status(200).send(status);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о типе занятия: " + error);
        }
    }

    static deleteLessonType = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTypeService.deleteLessonType(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить тип занятия: " + error);
        }         
    }
}
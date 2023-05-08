import {NextFunction, Request, Response} from "express";
import LessonTimeService from "../services/LessonTimeService";

export class LessonTimeController {
    static createLessonTime = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTimeService.createLessonTime(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось создать новый тип занятия: " + error);
        }                
    }

    static getAllLessonTimes = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTimeService.getAllLessonTimes();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список типов занятия: " + error);
        }         
    }

    static getLessonTimeById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTimeService.getLessonTimeById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о типе занятия: " + error);
        }
    }

    static saveLessonTime = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let status = await LessonTimeService.saveLessonTime(request.body);
            response.status(200).send(status);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о типе занятия: " + error);
        }
    }

    static deleteLessonTime = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await LessonTimeService.deleteLessonTime(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить тип занятия: " + error);
        }         
    }
}
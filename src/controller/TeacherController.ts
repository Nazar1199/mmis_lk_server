import {NextFunction, Request, Response} from "express";
import TeacherService from "../services/TeacherService";

export class TeacherController {
    static createTeacher = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TeacherService.createTeacher(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось добавить нового преподавателя: " + error);
        }                
    }

    static getAllTeacheres = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TeacherService.getAllTeachers();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список преподавателей: " + error);
        }         
    }

    static getTeacherById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TeacherService.getTeacherById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о преподавателе: " + error);
        }
    }

    static saveTeacher = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let profile = await TeacherService.saveTeacher(request.body);
            response.status(200).send(profile);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о преподавателе: " + error);
        }         
    }

    static deleteTeacher = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TeacherService.deleteTeacher(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить преподавателя: " + error);
        }         
    }
}
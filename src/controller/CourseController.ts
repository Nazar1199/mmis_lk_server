import {NextFunction, Request, Response} from "express";
import CourseService from "../services/CourseService";

export class CourseController {

    static createCourse = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await CourseService.createCourse(request.body);
            response.status(201).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохранении курса: " + error);
        }
    }

    static getAllCourses = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await CourseService.getAllCoursesList();
            response.status(200).send(result);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список курсов " + error);
        }
    }

    static getCourseById = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию о курсе");
        }
        try {
            console.log("Id course: " + request.params.id);
            let result = await CourseService.getCourseById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о курсе " + error);
        }
    }

    static saveCourse = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await CourseService.saveCourse(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о курсе " + error);
        }
    }

    static deleteCourse= async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось найти курс, который требуется удалить");
        }
        try {
            await CourseService.deleteCourse(request.params.id);
            response.status(200).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить курс");
        }
    }
}
import {NextFunction, Request, Response} from "express";
import StudentService from "../services/StudentService";

export class StudentController {

    static createStudent = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StudentService.createStudent(request.body);
            response.status(201).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при добавлении студента: " + error);
        }
    }

    static getAllStudents = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StudentService.getAllStudents();
            response.status(200).send(result);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список студентов " + error);
        }
    }

    static getStudentById = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию о студенте");
        }
        try {
            console.log("Id student: " + request.params.id);
            let result = await StudentService.getStudentById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о студенте " + error);
        }
    }

    static getAllStudentsForGroup = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию о студенте");
        }
        try {
            console.log("Id student: " + request.params.id);
            let result = await StudentService.getAllStudentsForGroup(request.params.group);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список студентов " + error);
        }
    }

    static saveStudent = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StudentService.saveStudent(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о студенте " + error);
        }
    }

    static deleteStudent = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось найти студента, которого требуется удалить");
        }
        try {
            await StudentService.deleteStudent(request.params.id);
            response.status(200).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить студента" + error);
        }
    }
}
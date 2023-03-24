import {NextFunction, Request, Response} from "express";
import TeacherService from "../services/TeacherService";

export class TeacherController {
    static createTeacher = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TeacherService.createTeacher(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllTeacheres = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TeacherService.getAllTeachers();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getTeacherById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TeacherService.getTeacherById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
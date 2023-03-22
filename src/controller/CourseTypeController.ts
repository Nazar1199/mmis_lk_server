import {NextFunction, Request, Response} from "express";
import TypeCourseService from "../services/TypeCourseService";

export class CourseTypeController {
    static createTypeCourse = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeCourseService.createTypeCourse(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllTypeCourse = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeCourseService.getAllTypeCourse();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getTypeCourseById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TypeCourseService.getTypeCourseById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
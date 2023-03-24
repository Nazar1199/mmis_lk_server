import {NextFunction, Request, Response} from "express";
import FacultyService from "../services/FacultyService";

export class FacultyController {
    static createFaculty = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await FacultyService.createFaculty(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllFacultyes = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await FacultyService.getAllFacultys();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getFacultyById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await FacultyService.getFacultyById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
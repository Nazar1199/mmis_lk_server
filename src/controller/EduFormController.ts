import {NextFunction, Request, Response} from "express";
import EduFormService from "../services/EduFormService";

export class EduFormController {
    static createEduForm = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await EduFormService.createEduForm(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllEduForm = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await EduFormService.getAllEduForm();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getEduFormById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await EduFormService.getEduFormById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
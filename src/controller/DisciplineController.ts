import {NextFunction, Request, Response} from "express";
import DisciplineService from "../services/DisciplineService";

export class DisciplineController {
    static createDiscipline = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DisciplineService.createDiscipline(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllDisciplinees = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DisciplineService.getAllDisciplines();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getDisciplineById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DisciplineService.getDisciplineById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
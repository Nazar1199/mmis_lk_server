import {NextFunction, Request, Response} from "express";
import DisciplineService from "../services/DisciplineService";

export class DisciplineController {
    static createDiscipline = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DisciplineService.createDiscipline(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось добавить дисциплину: " + error);
        }                
    }

    static getAllDisciplines = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DisciplineService.getAllDisciplines();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список дисциплин: " + error);
        }         
    }

    static getDisciplineById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DisciplineService.getDisciplineById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о дисциплине: " + error);
        }
    }

    static saveDiscipline = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let profile = await DisciplineService.saveDiscipline(request.body);
            response.status(200).send(profile);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о дисциплине: " + error);
        }         
    }

    static deleteDiscipline = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DisciplineService.deleteDiscipline(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить дисциплину: " + error);
        }         
    }
}
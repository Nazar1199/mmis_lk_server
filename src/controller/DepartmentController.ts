import {NextFunction, Request, Response} from "express";
import DepartmentService from "../services/DepartmentService";

export class DepartmentController {
    static createDepartment = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DepartmentService.createDepartment(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось создать новую кафедру: " + error);
        }                
    }

    static getAllDepartments = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DepartmentService.getAllDepartments();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список кафедр: " + error);
        }         
    }

    static getDepartmentById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DepartmentService.getDepartmentById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о кафедре: " + error);
        }
    }

    static saveDepartment = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let status = await DepartmentService.saveDepartment(request.body);
            response.status(200).send(status);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о кафедре: " + error);
        }
    }

    static deleteDepartment = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await DepartmentService.deleteDepartment(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить кафедру: " + error);
        }         
    }
}
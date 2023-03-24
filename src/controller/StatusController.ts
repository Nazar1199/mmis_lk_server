import {NextFunction, Request, Response} from "express";
import StatusService from "../services/StatusService";

export class StatusController {
    static createStatus = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StatusService.createStatus(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllStatuses = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StatusService.getAllStatuses();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getStatusById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await StatusService.getStatusById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
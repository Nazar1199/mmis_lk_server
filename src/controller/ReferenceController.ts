import {NextFunction, Request, Response} from "express";
import ReferenceService from "../services/ReferenceService";

export class ReferenceController {
    static createReference = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ReferenceService.createReference(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllReferencees = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ReferenceService.getAllReferences();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getReferenceById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ReferenceService.getReferenceById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
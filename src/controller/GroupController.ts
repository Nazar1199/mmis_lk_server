import {NextFunction, Request, Response} from "express";
import GroupService from "../services/GroupService";

export class GroupController {
    static createGroup = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await GroupService.createGroup(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }                
    }

    static getAllGroupes = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await GroupService.getAllGroups();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }         
    }

    static getGroupById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await GroupService.getGroupById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send(error);
        }
    }
}
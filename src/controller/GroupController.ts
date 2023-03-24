import {NextFunction, Request, Response} from "express";
import GroupService from "../services/GroupService";

export class GroupController {
    static createGroup = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await GroupService.createGroup(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании новой группы: " + error);
        }                
    }

    static getAllGroupes = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await GroupService.getAllGroups();
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список групп: " + error);
        }         
    }

    static getGroupById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await GroupService.getGroupById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о группе: " + error);
        }
    }

    static saveGroup = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let profile = await GroupService.saveGroup(request.body);
            response.status(200).send(profile);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о группе: " + error);
        }         
    }

    static deleteGroup = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await GroupService.deleteGroup(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить группу: " + error);
        }         
    }
}
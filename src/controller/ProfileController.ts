import {NextFunction, Request, Response} from "express";
import ProfileService from "../services/ProfileService";

export class ProfileController {
    static createProfile = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProfileService.createProfile(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при сохрании нового профиля: " + error);
        }                
    }

    static registration = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProfileService.registration(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при регистрации: " + error);
        }                
    }

    static login = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProfileService.login(request.body.email, request.body.password);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Неверный логин или пароль: " + error);
        }                
    }

    static getMyProfile = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProfileService.getMyProfile(request.headers.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить профиль: " + error);
        }
    }

    static getProfileById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProfileService.getProfileById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить профиль: " + error);
        }
    }

    static saveProfile = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let profile = await ProfileService.saveProfile(request.body);
            response.status(200).send(profile);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о профиле: " + error);
        }         
    }

    static deleteProfile = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await ProfileService.deleteProfile(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось удалить профиль: " + error);
        }         
    }
}
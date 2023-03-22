import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {
  
    static getAllUsers = async (request: Request, response: Response, next: NextFunction) => {
        console.log("getAllUsers...");
        let userRepository = getRepository(User);
        let users = await userRepository.find();
        response.status(200).send(users);
    }

    static getUserById = async (request: Request, response: Response, next: NextFunction) => {
        let userRepository = getRepository(User);
        console.log("Id user: " + request.params.id);
        let user = await userRepository.findOne(request.params.id);
        response.status(200).send(user);
    }
    static findUser = async (request: Request, response: Response, next: NextFunction) => {
        let userRepository = getRepository(User);
        //console.log(request)
        console.log("login: " + request.body.login + ", password: " + request.body.password);
        let user = await userRepository.findOne({login: request.body.login,
                                                 password: request.body.password});
        console.log("User: " + (user ? user.login : "User not found"));
        if (!user) {
            response.status(401).send("Неверный логин или пароль!");
            return;
        }
        response.status(200).send(user);
    }

    static saveUser = async (request: Request, response: Response, next: NextFunction) => {
        let userRepository = getRepository(User);
        try {
            await userRepository.save(request.body);
        } catch(error) {
            response.status(409).send("Не удалось сохранить информацию о пользователе");
            return; 
        }         
        response.status(200).send();
    }

    async removeUser(request: Request, response: Response, next: NextFunction) {
        let userRepository = getRepository(User);
        let userToRemove: User;
        try {
            userToRemove = await userRepository.findOne(request.params.id);
        } catch (error) {
            response.status(404).send("Не удалось удалить пользователя");
            return;
        }         
        await userRepository.remove(userToRemove);
        response.status(204).send();
    }

}
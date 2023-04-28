import ProfileService from "../services/ProfileService";
import {NextFunction, Request, Response} from "express";

const jwt = require('jsonwebtoken');

async function checkJwtAdmin (request: Request, response: Response, next: NextFunction) {
    try {
        const token = request.headers.authorization;
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
        let profile = await ProfileService.getProfileById(decodeToken.id);
        request.headers.id = decodeToken.id;
        if (profile.profileRole.id !== 2){throw new Error}
        next();
    } catch (error) {
        return response.status(401).send("Ошибка авторизации: " + error);
    }
}

export default checkJwtAdmin;
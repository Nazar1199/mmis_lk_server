import ProfileService from "../services/ProfileService";
import {NextFunction, Request, Response} from "express";

const jwt = require('jsonwebtoken');

function checkJwtAuth (request: Request, response: Response, next: NextFunction) {
    try {
        const token = request.headers.authorization;
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        return response.status(401).send("Ошибка авторизации: " + error);
    }
}

export default checkJwtAuth;
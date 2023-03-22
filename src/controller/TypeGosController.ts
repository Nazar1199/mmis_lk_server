import { DirectoryProgramm } from "../entity/DirectoryProgramm";
import {NextFunction, Request, Response} from "express";
import { getRepository } from "typeorm";
import { TypeGOS } from "../entity/TypeGOS";
import TypeGOSService from "../services/TypeGOSService";

export class TypeGosController {
    static createTypeCmpt = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let typeGos = await TypeGOSService.createTypeGOS(request.body);
            response.status(200).send(typeGos);
        } catch(error) {
            response.status(500).send("Ошибка при сохранении типа стандарта: " + error);
        }                
    }

    static getAllTypesCmpt = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let typesGos = await TypeGOSService.getAllTypeGOS();
            response.status(200).send(typesGos);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список типов стандартов " + error);
        }         
    }

    static getTypeCmptById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let typeGos = await TypeGOSService.getTypeGOSById(request.params.id);
            response.status(200).send(typeGos);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить тип стандарта " + error);
        }
    }


    static getAllTypeGos = async (request: Request, response: Response, next: NextFunction) => {
        let typeGosRepository = getRepository(TypeGOS);
        let typeGos;
        try {
            typeGos = await typeGosRepository.find();
        } catch(error) {
            console.log("Error: " + error);
            return; 
        } 
        response.send(typeGos);
    }

    static getTypeGosById = async(request: Request, response: Response, next: NextFunction) => {
        let typeGosRepository = getRepository(TypeGOS);
        let typeGos = await typeGosRepository.findOne(request.params.id);
        response.send(typeGos);
    }
}
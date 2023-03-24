import {NextFunction, Request, Response} from "express";
import OrderingReferenceService from "../services/OrderingReferenceService";

export class OrderingReferencesController {

    static createOrderingReferences = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await OrderingReferenceService.createOrderingReference(request.body);
            response.status(201).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при добавлении заказанной справки: " + error);
        }
    }

    static getAllOrderingReferences = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await OrderingReferenceService.getAllOrderingReferences();
            response.status(200).send(result);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список заказанных справок " + error);
        }
    }

    static getOrderingReferenceById = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось получить информацию о заказанной справке");
        }
        try {
            console.log("Id ordering reference: " + request.params.id);
            let result = await OrderingReferenceService.getOrderingReferenceById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о заказанной справке " + error);
        }
    }

    static getAllOrderingReferencesForStudent = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.student) {
            throw new Error("Не удалось получить информацию о заказанных справках");
        }
        try {
            console.log("Id student: " + request.params.student);
            let result = await OrderingReferenceService.getAllOrderingReferencesForStudent(request.params.student);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о заказанных справках " + error);
        }
    }

    static saveOrderingReference = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await OrderingReferenceService.saveOrderingReference(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о заказанной справке " + error);
        }
    }

    static deleteOrderingReference = async(request: Request, response: Response, next: NextFunction) => {
        if (!request.params.id) {
            throw new Error("Не удалось найти заказанную справку, которую требуется удалить");
        }
        try {
            await OrderingReferenceService.deleteOrderingReference(request.params.id);
            response.status(200).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить заказанную справку" + error);
        }
    }
}
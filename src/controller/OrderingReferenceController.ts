import {NextFunction, Request, Response} from "express";
import OrderingReferenceService from "../services/OrderingReferenceService";
import StatusService from "../services/StatusService";
import ProfileService from "../services/ProfileService";

export class OrderingReferenceController {

    static createOrderingReference = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await OrderingReferenceService.createOrderingReference(request.body);
            response.status(201).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при добавлении заказанной справки: " + error);
        }
    }

    static createOrderingReferenceForMe = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.headers.id) {
                throw new Error("Ошибка при добавлении заказанной справки, студент не определен");
            }
            let newReference = {reference: null, status: null, student: null};
            newReference.reference = request.body;
            newReference.status = await StatusService.getStatusById(3);
            newReference.student = await ProfileService.getMyStudent(request.headers.id);
            request.body = newReference;
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
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о заказанной справке");
            }
            console.log("Id ordering reference: " + request.params.id);
            let result = await OrderingReferenceService.getOrderingReferenceById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о заказанной справке " + error);
        }
    }

    static getAllOrderingReferencesForMe = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.headers.id) {
                throw new Error("Не удалось получить информацию о заказанных справках");
            }
            request.headers.id = await ProfileService.getMyStudentId(request.headers.id);
            console.log("Id student: " + request.headers.id);
            let result = await OrderingReferenceService.getAllOrderingReferencesForStudent(request.headers.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о заказанных справках " + error);
        }
    }

    static getAllOrderingReferencesForStudent = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о заказанных справках");
            }
            console.log("Id student: " + request.params.id);
            let result = await OrderingReferenceService.getAllOrderingReferencesForStudent(request.params.id);
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
        try {
            if (!request.params.id) {
                throw new Error("Не удалось найти заказанную справку, которую требуется удалить");
            }
            await OrderingReferenceService.deleteOrderingReference(request.params.id);
            response.status(200).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить заказанную справку" + error);
        }
    }
}
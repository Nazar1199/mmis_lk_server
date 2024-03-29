import {NextFunction, Request, Response} from "express";
import TimetableService from "../services/TimetableService";

export class TimetableController {

    static createTimetable = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TimetableService.createTimetable(request.body);
            response.status(201).send(result);
        } catch(error) {
            response.status(500).send("Ошибка при добавлении расписание: " + error);
        }
    }

    static getAllTimetables = async (request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TimetableService.getAllTimetables();
            response.status(200).send(result);
        } catch(error) {
            console.log("Error: " + error);
            response.status(500).send("Не удалось получить список расписания: " + error);
        }
    }

    static getTimetableById = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о расписании");
            }
            console.log("Id timetable: " + request.params.id);
            let result = await TimetableService.getTimetableById(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить информацию о расписании: " + error);
        }
    }

    static getAllTimetablesForGroup = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о расписании для группы: ");
            }
            console.log("Id group: " + request.params.id);
            let result = await TimetableService.getAllTimetablesForGroup(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список расписания для группы: " + error);
        }
    }

    static getAllTimetablesForAuditorium = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о расписании для аудитории");
            }
            console.log("Id auditorium: " + request.params.id);
            let result = await TimetableService.getAllTimetablesForAuditorium(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список расписания для аудитории: " + error);
        }
    }

    static getAllTimetablesForDiscipline = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о расписании для дисциплины");
            }
            console.log("Id discipline: " + request.params.id);
            let result = await TimetableService.getAllTimetablesForDiscipline(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список расписания для дисциплины: " + error);
        }
    }

    static getAllTimetablesForTeacher = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось получить информацию о расписании для преподавателя");
            }
            console.log("Id teacher: " + request.params.id);
            let result = await TimetableService.getAllTimetablesForTeacher(request.params.id);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось получить список расписания для преподавателя: " + error);
        }
    }

    static saveTimetable = async(request: Request, response: Response, next: NextFunction) => {
        try {
            let result = await TimetableService.saveTimetable(request.body);
            response.status(200).send(result);
        } catch(error) {
            response.status(500).send("Не удалось сохранить информацию о расписании: " + error);
        }
    }

    static deleteTimetable = async(request: Request, response: Response, next: NextFunction) => {
        try {
            if (!request.params.id) {
                throw new Error("Не удалось найти расписание, которого требуется удалить");
            }
            await TimetableService.deleteTimetable(request.params.id);
            response.status(200).send();
        } catch (error) {
            response.status(500).send("Не удалось удалить расписание: " + error);
        }
    }
}
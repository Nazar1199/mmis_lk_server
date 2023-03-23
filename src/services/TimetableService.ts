import { getRepository } from "typeorm";
import { Timetable } from "../entity/Timetable";

class TimetableService {
    createTimetable = async (timetable: Timetable) => {
        let createTimetable = getRepository(Timetable).create(timetable);
        let result = await getRepository(Timetable).save(createTimetable);
        return result;
    }

    getAllTimetables = async () => {
        let allTimetables = await getRepository(Timetable).find(); 
        console.log("Timetables: " + JSON.stringify(allTimetables));
        return allTimetables;
    }

    getTimetableById = async(id: number) => {
        if(!id) return;
        let timetable = await getRepository(Timetable).findOne({
            relations: ['group', 'teacher', 'discipline'],
            where: {id: id}
        });
        return timetable;
    }

    getAllTimetablesForDiscipline = async(idDiscipline: number) => {
        if(!idDiscipline) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline'],
            where: {discipline: {id: idDiscipline}}
        });
        return timetable;
    }

    getAllTimetablesForGroup = async(idGroup: number) => {
        if(!idGroup) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline'],
            where: {group: {id: idGroup}}
        });
        return timetable;
    }

    getAllTimetablesForTeacher = async(idTeacher: number) => {
        if(!idTeacher) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline'],
            where: {teacher: {id: idTeacher}}
        });
        return timetable;
    }

    getAllTimetablesForAuditorium = async(numAuditorium: number) => {
        if(!numAuditorium) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline'],
            where: {auditorium: numAuditorium}
        });
        return timetable;
    }

    saveTimetable = async(timetable: Timetable) => {
        if(!timetable) return;
        let saveTimetable = await getRepository(Timetable).save(timetable);
        return saveTimetable;
    }

    deleteTimetable = async(id: number) => {
        if(!id) return;
        return await getRepository(Timetable).delete(id);
    }
}

export default new TimetableService();
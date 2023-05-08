import { getRepository } from "typeorm";
import { Timetable } from "../entity/Timetable";

class TimetableService {
    createTimetable = async (timetable: Timetable) => {
        let createTimetable = getRepository(Timetable).create(timetable);
        let result = await getRepository(Timetable).save(createTimetable);
        return result;
    }

    getAllTimetables = async () => {
        let allTimetables = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline', 'auditorium', 'lessonTime', 'lessonType']
        }); 
        console.log("Timetables: " + JSON.stringify(allTimetables));
        return allTimetables;
    }

    getTimetableById = async(id: number) => {
        if(!id) return;
        let timetable = await getRepository(Timetable).findOne({
            relations: ['group', 'teacher', 'discipline', 'auditorium', 'lessonTime', 'lessonType'],
            where: {id: id}
        });
        return timetable;
    }

    getAllTimetablesForDiscipline = async(idDiscipline: number) => {
        if(!idDiscipline) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline', 'auditorium', 'lessonTime', 'lessonType'],
            where: {discipline: {id: idDiscipline}},
            order: {date: 'ASC'}
        });
        return timetable;
    }

    getAllTimetablesForGroup = async(idGroup: number) => {
        if(!idGroup) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline', 'auditorium', 'lessonTime', 'lessonType'],
            where: {group: {id: idGroup}},
            order: {date: 'ASC'}
        });
        return timetable;
    }

    getAllTimetablesForTeacher = async(idTeacher: number) => {
        if(!idTeacher) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline', 'auditorium', 'lessonTime', 'lessonType'],
            where: {teacher: {id: idTeacher}},
            order: {date: 'ASC'}
        });
        return timetable;
    }

    getAllTimetablesForAuditorium = async(numAuditorium: number) => {
        if(!numAuditorium) return;
        let timetable = await getRepository(Timetable).find({
            relations: ['group', 'teacher', 'discipline', 'auditorium', 'lessonTime', 'lessonType'],
            where: {auditorium: numAuditorium},
            order: {date: 'ASC'}
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
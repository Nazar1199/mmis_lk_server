import { getRepository } from "typeorm";
import { Discipline } from "../entity/Discipline";

class DisciplineService {
    createDiscipline = async (discipline: Discipline) => {
        let createDiscipline = getRepository(Discipline).create(discipline);
        let result = await getRepository(Discipline).save(createDiscipline);
        return result;
    }

    getAllDisciplines = async () => {
        let allDisciplines = await getRepository(Discipline).find(); 
        console.log("Disciplines: " + JSON.stringify(allDisciplines));
        return allDisciplines;
    }

    getDisciplineById = async(id: number) => {
        if(!id) return;
        let discipline = await getRepository(Discipline).findOne(id);
        return discipline;
    }

    saveDiscipline = async(discipline: Discipline) => {
        if(!discipline) return;
        let saveDiscipline = await getRepository(Discipline).save(discipline);
        return saveDiscipline;
    }

    deleteDiscipline = async(id: number) => {
        if(!id) return;
        return await getRepository(Discipline).delete(id);
    }
}

export default new DisciplineService();
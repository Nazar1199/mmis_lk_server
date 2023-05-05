import { getRepository } from "typeorm";
import { Auditorium } from "../entity/Auditorium";

class AuditoriumService {
    createAuditorium = async (auditorium: Auditorium) => {
        let createAuditorium = getRepository(Auditorium).create(auditorium);
        let result = await getRepository(Auditorium).save(createAuditorium);
        return result;
    }

    getAllAuditoriums = async () => {
        let allAuditoriumes = await getRepository(Auditorium).find({
            order: {
                name: 'ASC'
            }}); 
        return allAuditoriumes;
    }

    getAuditoriumById = async(id: number) => {
        if(!id) return;
        let auditorium = await getRepository(Auditorium).findOne(id);
        return auditorium;
    }

    saveAuditorium = async(auditorium: Auditorium) => {
        if(!auditorium) return;
        let saveAuditorium = await getRepository(Auditorium).save(auditorium);
        return saveAuditorium;
    }

    deleteAuditorium = async(id: number) => {
        if(!id) return;
        return await getRepository(Auditorium).delete(id);
    }
}

export default new AuditoriumService();
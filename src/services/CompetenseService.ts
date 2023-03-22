import { getRepository } from "typeorm";
import { Competense } from "../entity/Competense";

class CompetenseService {
    createCmpt = async (cmpt: Competense) => {
        let createCmpt = getRepository(Competense).create(cmpt);
        let result = await getRepository(Competense).save(createCmpt);
        return result;
    }

    getAllCmpt = async () => {
        let allCmpt = await getRepository(Competense).find(); 
        console.log("Cmpt: " + JSON.stringify(allCmpt));
        return allCmpt;
    }

    getCmptById = async(id: number) => {
        if(!id) return;
        let cmpt = await getRepository(Competense).findOne(id);
        return cmpt;
    }

    saveCmpt = async(cmpt: Competense) => {
        if(!cmpt) return;
        let saveCmpt = await getRepository(Competense).save(cmpt);
        return saveCmpt;
    }

    deleteCompetense = async(id: number) => {
        if(!id) return;
        return await getRepository(Competense).delete(id);
    }
}

export default new CompetenseService();
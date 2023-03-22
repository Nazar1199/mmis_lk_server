import { getRepository } from "typeorm";
import { NewEduSpaceCmpt } from "../entity/NewEduSpaceCmpt"

class NewEduSpaceCmptService {
    createNewEduSpaceCmpt = async(esCompetense: NewEduSpaceCmpt) => {
        const esCmpt = await getRepository(NewEduSpaceCmpt).findOne({
            where: {newEduSpace: esCompetense.newEduSpace, cmpt: esCompetense.cmpt}
        })
        if (esCmpt instanceof NewEduSpaceCmpt) {
            console.log("Current esCmpt: " + JSON.stringify(esCmpt));
            return;
        }

        const createEsCmpt = await getRepository(NewEduSpaceCmpt).create(esCompetense);
        return await getRepository(NewEduSpaceCmpt).save(createEsCmpt);
    }

    getNewEduSpaceCmptById = async(id: number) => {
        if (!id) return;
        return await getRepository(NewEduSpaceCmpt).findOne({where: {id: id}, relations: ["newEduSpace", "cmpt"]});
    }
    
    getAllNewEduSpacesForCmpt = async(idCmpt: number) => {    
        let result = await getRepository(NewEduSpaceCmpt).find({relations: ['newEduSpace'],                                                               
                                                               where : { cmpt : { id : idCmpt}}
                                                              });
        return result;
    }

    getAllCmptsForNewEduSpace = async(idNewEduSpace: number) => {    
        let result = await getRepository(NewEduSpaceCmpt).find({relations: ['cmpt'],                                                               
                                                               where : { newEduSpace : { id : idNewEduSpace}}
                                                              });
        return result;
    }

    saveNewEduSpaceCmpt = async(newEduSpaceCmpt: NewEduSpaceCmpt) => {
        let result = await getRepository(NewEduSpaceCmpt).save(newEduSpaceCmpt);
        return result;
    }

    deleteNewEduSpaceCmpt = async(id: number) => {
        if(!id) return;
        const result = await getRepository(NewEduSpaceCmpt).findOne(id);
        if (!result) return;
        return await getRepository(NewEduSpaceCmpt).delete(id);
    }

}

export default new NewEduSpaceCmptService();
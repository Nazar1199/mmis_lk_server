import { getRepository } from "typeorm";
import { Reference } from "../entity/Reference";

class ReferenceService {
    createReference = async (reference: Reference) => {
        let createReference = getRepository(Reference).create(reference);
        let result = await getRepository(Reference).save(createReference);
        return result;
    }

    getAllReferences = async () => {
        let allReferences = await getRepository(Reference).find(); 
        console.log("References: " + JSON.stringify(allReferences));
        return allReferences;
    }

    getReferenceById = async(id: number) => {
        if(!id) return;
        let reference = await getRepository(Reference).findOne(id);
        return reference;
    }

    saveReference = async(reference: Reference) => {
        if(!reference) return;
        let saveReference = await getRepository(Reference).save(reference);
        return saveReference;
    }

    deleteReference = async(id: number) => {
        if(!id) return;
        return await getRepository(Reference).delete(id);
    }
}

export default new ReferenceService();
import { getRepository } from "typeorm";
import { TypeControl } from "../entity/TypeControl";

class TypeControlService {
    createTypeControl = async (status: TypeControl) => {
        let createTypeControl = getRepository(TypeControl).create(status);
        let result = await getRepository(TypeControl).save(createTypeControl);
        return result;
    }

    getAllTypeControls = async () => {
        let allTypeControls = await getRepository(TypeControl).find(); 
        console.log("TypeControls: " + JSON.stringify(allTypeControls));
        return allTypeControls;
    }

    getTypeControlById = async(id: number) => {
        if(!id) return;
        let status = await getRepository(TypeControl).findOne(id);
        return status;
    }

    saveTypeControl = async(typeControl: TypeControl) => {
        if(!typeControl) return;
        let saveTypeControl = await getRepository(TypeControl).save(typeControl);
        return saveTypeControl;
    }

    deleteTypeControl = async(id: number) => {
        if(!id) return;
        return await getRepository(TypeControl).delete(id);
    }
}

export default new TypeControlService();
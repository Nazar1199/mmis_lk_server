import { getRepository} from "typeorm";
import { TypeEduSpace } from "../entity/Faculty";

class TypeEduSpaceService {
    createTypeEduSpace = async (typeEduSpace: TypeEduSpace) => {
        let createES = await getRepository(TypeEduSpace).create(typeEduSpace);
        let result = await getRepository(TypeEduSpace).save(createES);
        return result;
    }

    getAllTypeEduSpace = async () => {
        let result = await getRepository(TypeEduSpace).find();
        return result;
    }

    getTypeEduSpaceById = async(id: number) => {
        if (!id) return;
        let result = await getRepository(TypeEduSpace).findOne(id);
        return result;
    }

    saveTypeEduSpace = async(value: TypeEduSpace) => {
        if(!value) return;
        let result = await getRepository(TypeEduSpace).save(value);
        return result;
    }

    deleteTypeEduSpace = async(id: number) => {
        if(!id) return;
        return await getRepository(TypeEduSpace).delete(id);
    }
}

export default new TypeEduSpaceService();

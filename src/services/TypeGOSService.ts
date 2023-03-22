import { getRepository} from "typeorm";
import { TypeGOS } from "../entity/TypeGOS";

class TypeGOSService {
    createTypeGOS = async (typeGOS: TypeGOS) => {
        let createTypeGOS = await getRepository(TypeGOS).create(typeGOS);
        let result = await getRepository(TypeGOS).save(createTypeGOS);
        return result;
    }

    getAllTypeGOS = async () => {
        let typesGOS = await getRepository(TypeGOS).find(); 
        return typesGOS;
    }

    getTypeGOSById = async(id: number) => {
        if (!id) return;
        let typeGOS = await getRepository(TypeGOS).findOne(id);
        return typeGOS;
    }
}

export default new TypeGOSService();
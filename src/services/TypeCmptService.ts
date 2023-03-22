import { getRepository} from "typeorm";
import { Timetable } from "../entity/TypeCmpt";

class TypeCmptService {
    createTypeCmpt = async (typeCmpt: Timetable) => {
        let createTypeCmpt = await getRepository(Timetable).create(typeCmpt);
        let result = await getRepository(Timetable).save(createTypeCmpt);
        return result;
    }

    getAllTypeCmpt = async () => {
        let typesCmpt = await getRepository(Timetable).find(); 
        return typesCmpt;
    }

    getTypeCmptById = async(id: number) => {
        if (!id) return;
        let typeCmpt = await getRepository(Timetable).findOne(id);
        return typeCmpt;
    }
}

export default new TypeCmptService();
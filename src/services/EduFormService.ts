import { getRepository} from "typeorm";
import { EduForm } from "../entity/EduForm";

class EduFormService {
    createEduForm = async (value: EduForm) => {
        let createNew = await getRepository(EduForm).create(value);
        let result = await getRepository(EduForm).save(createNew);
        return result;
    }

    getAllEduForm = async () => {
        let result = await getRepository(EduForm).find(); 
        return result;
    }

    getEduFormById = async(id: number) => {
        if (!id) return;
        let result = await getRepository(EduForm).findOne(id);
        return result;
    }
}

export default new EduFormService();
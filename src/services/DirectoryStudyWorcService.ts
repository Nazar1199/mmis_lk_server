import { getRepository} from "typeorm";
import { DirectoryStudyWork } from "../entity/DirectoryStudyWork";

class DirectoryStudyWorkService {
    createStudyWork = async (value: DirectoryStudyWork) => {
        let createNew = await getRepository(DirectoryStudyWork).create(value);
        let result = await getRepository(DirectoryStudyWork).save(createNew);
        return result;
    }

    getAllStudyWorks = async () => {
        let result = await getRepository(DirectoryStudyWork).find(); 
        return result;
    }

    getStudyWorkById = async(id: number) => {
        if (!id) return;
        let result = await getRepository(DirectoryStudyWork).findOne(id);
        return result;
    }

    saveStudyWork = async(value: DirectoryStudyWork) => {
        if (!value) return;
        return await getRepository(DirectoryStudyWork).save(value);
    }

    deleteStudyWork = async(id: number) => {
        if (!id) return;
        return await getRepository(DirectoryStudyWork).delete(id);
    }
}

export default new DirectoryStudyWorkService();
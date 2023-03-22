import { getRepository} from "typeorm";
import { DirectoryProgramm } from "../entity/DirectoryProgramm";

class DirectoryProgrammService {
    createTypeProgramm = async (typeProgramm: DirectoryProgramm) => {
        let createTypeProgramm = await getRepository(DirectoryProgramm).create(typeProgramm);
        let result = await getRepository(DirectoryProgramm).save(createTypeProgramm);
        return result;
    }

    getAllTypeProgramm = async () => {
        console.log("get all type programm: ")
        let typesProgramm = await getRepository(DirectoryProgramm).find(); 
        return typesProgramm;
    }

    getTypeProgrammById = async(id: number) => {
        if (!id) {
            throw new Error("");
        }
        let typeProgramm = await getRepository(DirectoryProgramm).findOne(id);
        return typeProgramm;
    }
}

export default new DirectoryProgrammService();
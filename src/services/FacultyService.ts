import { getRepository } from "typeorm";
import { Faculty } from "../entity/Faculty";

class FacultyService {
    createFaculty = async (faculty: Faculty) => {
        let createFaculty = getRepository(Faculty).create(faculty);
        let result = await getRepository(Faculty).save(createFaculty);
        return result;
    }

    getAllFacultys = async () => {
        let allFacultys = await getRepository(Faculty).find(); 
        console.log("Facultys: " + JSON.stringify(allFacultys));
        return allFacultys;
    }

    getFacultyById = async(id: number) => {
        if(!id) return;
        let faculty = await getRepository(Faculty).findOne(id);
        return faculty;
    }

    saveFaculty = async(faculty: Faculty) => {
        if(!faculty) return;
        let saveFaculty = await getRepository(Faculty).save(faculty);
        return saveFaculty;
    }

    deleteFaculty = async(id: number) => {
        if(!id) return;
        return await getRepository(Faculty).delete(id);
    }
}

export default new FacultyService();
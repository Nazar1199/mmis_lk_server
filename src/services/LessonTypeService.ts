import { getRepository } from "typeorm";
import { LessonType } from "../entity/LessonType";

class LessonTypeService {
    createLessonType = async (status: LessonType) => {
        let createLessonType = getRepository(LessonType).create(status);
        let result = await getRepository(LessonType).save(createLessonType);
        return result;
    }

    getAllLessonTypes = async () => {
        let allLessonTypes = await getRepository(LessonType).find(); 
        console.log("LessonTypes: " + JSON.stringify(allLessonTypes));
        return allLessonTypes;
    }

    getLessonTypeById = async(id: number) => {
        if(!id) return;
        let status = await getRepository(LessonType).findOne(id);
        return status;
    }

    saveLessonType = async(lessonType: LessonType) => {
        if(!lessonType) return;
        let saveLessonType = await getRepository(LessonType).save(lessonType);
        return saveLessonType;
    }

    deleteLessonType = async(id: number) => {
        if(!id) return;
        return await getRepository(LessonType).delete(id);
    }
}

export default new LessonTypeService();
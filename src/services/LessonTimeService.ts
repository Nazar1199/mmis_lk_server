import { getRepository } from "typeorm";
import { LessonTime } from "../entity/LessonTime";

class LessonTimeService {
    createLessonTime = async (status: LessonTime) => {
        let createLessonTime = getRepository(LessonTime).create(status);
        let result = await getRepository(LessonTime).save(createLessonTime);
        return result;
    }

    getAllLessonTimes = async () => {
        let allLessonTimes = await getRepository(LessonTime).find(); 
        console.log("LessonTimes: " + JSON.stringify(allLessonTimes));
        return allLessonTimes;
    }

    getLessonTimeById = async(id: number) => {
        if(!id) return;
        let status = await getRepository(LessonTime).findOne(id);
        return status;
    }

    saveLessonTime = async(lessonTime: LessonTime) => {
        if(!lessonTime) return;
        let saveLessonTime = await getRepository(LessonTime).save(lessonTime);
        return saveLessonTime;
    }

    deleteLessonTime = async(id: number) => {
        if(!id) return;
        return await getRepository(LessonTime).delete(id);
    }
}

export default new LessonTimeService();
import { getRepository} from "typeorm";
import {Group} from "../entity/TypeCourse";

class TypeCourseService {
    createTypeCourse= async (typeCourse: Group) => {
        let result = await getRepository(Group).create(typeCourse);
        return  await getRepository(Group).save(result);
    }

    getAllTypeCourse = async () => {
        return await getRepository(Group).find();
    }

    getTypeCourseById = async(id: number) => {
        if (!id) return;
        return await getRepository(Group).findOne(id);
    }
}

export default new TypeCourseService();
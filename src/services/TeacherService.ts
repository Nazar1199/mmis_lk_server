import { getRepository } from "typeorm";
import { Teacher } from "../entity/Teacher";

class TeacherService {
    createTeacher = async (teacher: Teacher) => {
        let createTeacher = getRepository(Teacher).create(teacher);
        let result = await getRepository(Teacher).save(createTeacher);
        return result;
    }

    getAllTeachers = async () => {
        let allTeachers = await getRepository(Teacher).find(); 
        console.log("Teachers: " + JSON.stringify(allTeachers));
        return allTeachers;
    }

    getTeacherById = async(id: number) => {
        if(!id) return;
        let teacher = await getRepository(Teacher).findOne(id);
        return teacher;
    }

    saveTeacher = async(teacher: Teacher) => {
        if(!teacher) return;
        let saveTeacher = await getRepository(Teacher).save(teacher);
        return saveTeacher;
    }

    deleteTeacher = async(id: number) => {
        if(!id) return;
        return await getRepository(Teacher).delete(id);
    }
}

export default new TeacherService();
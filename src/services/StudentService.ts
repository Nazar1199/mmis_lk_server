import { getRepository } from "typeorm";
import { Student } from "../entity/Student";

class StudentService {
    createStudent = async (student: Student) => {
        let createStudent = getRepository(Student).create(student);
        let result = await getRepository(Student).save(createStudent);
        return result;
    }

    getAllStudents = async () => {
        let allStudents = await getRepository(Student).find(); 
        console.log("Students: " + JSON.stringify(allStudents));
        return allStudents;
    }

    getStudentById = async(id: number) => {
        if(!id) return;
        let student = await getRepository(Student).findOne(id);
        return student;
    }

    saveStudent = async(student: Student) => {
        if(!student) return;
        let saveStudent = await getRepository(Student).save(student);
        return saveStudent;
    }

    deleteStudent = async(id: number) => {
        if(!id) return;
        return await getRepository(Student).delete(id);
    }
}

export default new StudentService();
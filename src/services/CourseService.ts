import { getRepository } from "typeorm";
import { Course } from "../entity/Course";

class CourseService {
    createCourse = async (course: Course) => {
        let createCourse = getRepository(Course).create(course);
        let result = await getRepository(Course).save(createCourse);
        return result;
    }

    getAllCourses = async () => {
        let allCourses = await getRepository(Course).find(); 
        console.log("Profiles: " + JSON.stringify(allCourses));
        return allCourses;
    }

    getCourseById = async(id: number) => {
        if(!id) return;
        let course = await getRepository(Course).findOne(id);
        return course;
    }

    saveCourse = async(course: Course) => {
        if(!course) return;
        let saveCourse = await getRepository(Course).save(course);
        return saveCourse;
    }

    deleteCourse = async(id: number) => {
        if(!id) return;
        return await getRepository(Course).delete(id);
    }
}

export default new CourseService();
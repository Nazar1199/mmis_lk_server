import {getRepository} from "typeorm";
import {Course} from "../entity/Course";
import { CourseRelation } from "../entity/Teacher";

class CourseService {
    createCourse = async (course: Course) => {
        let result = await getRepository(Course).create(course);
        return await  getRepository(Course).save(result);
    }

    createCourseRelation = async (courseRelation: CourseRelation) => {
        let result = await getRepository(CourseRelation).create(courseRelation);
        return await getRepository(CourseRelation).save(result);
    }

    getAllCoursesList = async () => {
        let courses = await getRepository(Course).find({relations: ['courseChild', 'courseChild.parentCourse', 'typeCourse']});
        let val = courses.map(course => {return {id: course.id, name: course.name, typeCourseId: course.typeCourse? course.typeCourse.id : null,
            typeCourse: course.typeCourse, description: course.description, volume: course.volume, targets: course.targets, tasks: course.tasks,
            parents: course.courseChild ? course.courseChild.map(m => {return m.parentCourse.id}) : null}});
        // return courses.map(m => {return {id: m.id, name: m.name, typeCourseId: m.typeCourse? m.typeCourse.id : null,
        //                                  description: m.description, volume: m.volume, targets: m.targets, tasks: m.tasks, 
        //                                   parentCourseId: m.courseChild ?  m.courseChild. : null,
        //                                  typeCourse: m.typeCourse}});
        console.log("getAllCoursesList val: " + JSON.stringify(val))
        return val;
    }

    getCourseById = async (id: number, bWithRelations: boolean = false) => {
        if (!id) return;
        let course = await getRepository(Course).findOne({
            where: {id: id},
            relations: ['courseChild', 'courseChild.parentCourse', 'typeCourse'],
        });
        let result = {id: course.id, name: course.name, typeCourseId: course.typeCourse? course.typeCourse.id : null,
            typeCourse: course.typeCourse, description: course.description, volume: course.volume, targets: course.targets, tasks: course.tasks,
            parents: course.courseChild ? course.courseChild.map(m => {return m.parentCourse.id}) : null};
        return result;
    }

    saveCourse = async(course: Course) => {
        if (!course) return;
        return await getRepository(Course).save(course);
    }

    deleteCourse = async(id: number) => {
        if (!id) return;
        // let courseToRemove = await getRepository(Course).findOne(id);
        // if (!courseToRemove)
        // {
        //     throw new Error("Не удалось найти курс, который требуется удалить");
        // }
        return await getRepository(Course).delete(id);
    }

    deleteCourseRelation = async(course: number, parent: number) => {
        if (!course || !parent) return;
        const id = await getRepository(CourseRelation).findOne({
            where: {
                childCourse: course,
                parentCourse: parent
            }
        });
        return await getRepository(CourseRelation).delete(id);
    }
}

export default new CourseService();
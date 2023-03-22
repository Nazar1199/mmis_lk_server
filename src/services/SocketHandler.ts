import { join } from "path";
import CompetenseService from "../services/CompetenseService";
import ProgrammCmptService from "./ProgrammCmptService";
import ProgrammService from "./ProgrammService";
import * as console from "console";
import CourseService from "./CourseService";
import ProgrammCourseService from "./ProgrammCourseService";
import NewEduSpaceService from "./NewEduSpaceService";
import NewEduSpaceCmptService from "./NewEduSpaceCmptService";
import TypeEduSpaceService from "./TypeEduSpaceService";

class SocketHandler {
    handler (io, socket) {
        socket.on('cmpt_add', async (cmpt) => {
            cmpt = await CompetenseService.saveCmpt(cmpt);
            io.emit('cmpt_added', cmpt);
            console.log('cmpt_added')
        });
        socket.on('cmpt_delete', async (id) => {
            await CompetenseService.deleteCompetense(id);
            io.emit('cmpt_deleted', id);
        });

        socket.on('programm_add', async (programm) => {
            console.log('Client added new programm: ' + programm.index);
            programm = await ProgrammService.createProgramm(programm);
            //(m=> { return { id: m.id, name: m.name, parentProgrammID: m.parentProgramm ? m.parentProgramm.id : null } });
            io.emit('programm_added', { id: programm.id, name: programm.name, index: programm.index, parentProgramm: programm.parentProgramm, parentProgrammID: programm.parentProgramm ? programm.parentProgramm.id : null, dirProgramm: programm.dirProgramm, dirProgrammId: programm.dirProgramm ? programm.dirProgramm.id : null, })
        });

        socket.on('programm_delete', async (id) => {
            await ProgrammService.deleteProgramm(id);
            io.emit('programm_deleted', id);
        });

        socket.on('progcmpt_add', async (progCmpt) => {
            let progscmpt = await ProgrammCmptService.createProgrammCmpt(progCmpt);
            io.emit('progcmpt_added', progscmpt);
        });

        socket.on('progcmpt_delete', async (progCmpt) => {
            let progscmpt = await ProgrammCmptService.deleteProgrammCmpt(progCmpt);
            io.emit('progcmpt_deleted', progscmpt);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });

        socket.on('course_add', async (course) => {
            console.log('Client added new course: ' + course.name);
            let parentId = null
            let courseIsNew = !course.id
            if (course.parentCourseId){
                parentId = course.parentCourseId
                course.parentCourse = await CourseService.getCourseById(course.parentCourseId)
            } 
            if (course.hasOwnProperty('parentCourse')){
                parentId = course.parentCourse.id
            }
            course = await CourseService.createCourse(course)
            if (courseIsNew && parentId){
                console.log('Add course relation:', {
                    id: null,
                    parentCourse: parentId,
                    childCourse: course.id
                  })
                await CourseService.createCourseRelation({
                    id: null,
                    parentCourse: parentId,
                    childCourse: course.id
                  });
            }
            course = await CourseService.getCourseById(course.id);
            io.emit('course_added', { id: course.id, name: course.name, typeCourseId: course.typeCourse? course.typeCourse.id : null,
                typeCourse: course.typeCourse,
                description: course.description, volume: course.volume, targets: course.targets, tasks: course.tasks, 
                parentCourse: course.parentCourse, 
                parentCourseId: course.parentCourse?  course.parentCourse.id : null,
                parents: course.parents })
        });

        socket.on('course_delete', async (id) => {
            await CourseService.deleteCourse(id);
            io.emit('course_deleted', id);
        });

        socket.on('programm_course_delete', async (id) => {
            await ProgrammCourseService.deleteProgrammCourse(id);
            io.emit('programm_course_deleted', id);
        });

        socket.on('programm_course_add', async (programmCourse) => {
            programmCourse = await ProgrammCourseService.createProgCourse(programmCourse);
            io.emit('programm_course_added', programmCourse);
        });

        socket.on('get_all_programms_for_course', async (courseId) => {
            const programms = await ProgrammCourseService.getAllProgForCourse(courseId);
            io.emit('receive_all_programms_for_course', programms);
        });

        socket.on('get_all_courses_for_programm', async (programmId) => {
            const courses = await ProgrammCourseService.getAllCourseForProgramm(programmId);
            io.emit('receive_all_courses_for_programm', courses);
        });

        // socket.on('edu_space_add',async (eduSpace) => {
        //     if (eduSpace.parentEduSpaceId){
        //         eduSpace.parentEduSpaceId = await EduSpaceService.getEduSpaceById(eduSpace.parentEduSpaceId)
        //     }
        //     eduSpace = await EduSpaceService.createEduSpace(eduSpace)
        //     io.emit('edu_space_added', {
        //         id: eduSpace.id, name: eduSpace.name, beginYear: eduSpace.beginYear, programm: eduSpace.programm, parentEduSpaceId: eduSpace.parentEduSpace? eduSpace.parentEduSpace.id : null
        //     })
        // });

        // socket.on('edu_space_delete', async (id) => {
        //     await EduSpaceService.deleteEduSpace(id)
        //     io.emit('edu_space_deleted', id)
        // });

        socket.on('get_all_course_for_programm',async (programmId) => {
            const courses = await (await ProgrammCourseService.getAllCourseForProgramm(programmId)).map(index => index.course)
            io.emit('courses_for_programm_loaded', courses)
        });

        socket.on('get_all_cmpts_for_programm',async (programmId) => {
            const cmpts = await (await ProgrammCmptService.getAllCmptForProgramm(programmId)).map(item => item.cmpt)
            io.emit('cmpts_for_programm_loaded', cmpts)
        });

        socket.on('new_edu_space_add',async (newEduSpace) => {
            if (newEduSpace.parentNewEduSpaceId){
                newEduSpace.parentNewEduSpace = await NewEduSpaceService.getNewESById(newEduSpace.parentNewEduSpaceId)
            }
            console.log('newEduSpace: ',newEduSpace)
            let cmptArr = []
            if(newEduSpace.hasOwnProperty('cmpt')){
                cmptArr = newEduSpace.cmpt
            }
            newEduSpace = await NewEduSpaceService.createNewES(newEduSpace)
            await cmptArr.forEach(cmptId => {
                let newEduCmpt = {
                    id: null,
                    newEduSpace: newEduSpace,
                    cmpt: cmptId
                }
                NewEduSpaceCmptService.createNewEduSpaceCmpt(newEduCmpt)
            });
            newEduSpace.typeES = await TypeEduSpaceService.getTypeEduSpaceById(newEduSpace.typeES)
            io.emit('new_edu_space_added', {
                id: newEduSpace.id, 
                name: newEduSpace.name, 
                programm: newEduSpace.programm,
                typeES: newEduSpace.typeES, 
                //cmpt: newEduSpace.cmpt, 
                eduSpaceId: newEduSpace.eduSpace, 
                eduForm: newEduSpace.eduForm, 
                course: newEduSpace.course, 
                startDate: newEduSpace.startDate, 
                endDate: newEduSpace.endDate, 
                parentNewEduSpaceId: newEduSpace.parentNewEduSpace? newEduSpace.parentNewEduSpace.id : null
            })
        });

        socket.on('new_edu_space_delete', async (id) => {
            await NewEduSpaceService.deleteNewES(id)
            io.emit('new_edu_space_deleted', id)
        });

        socket.on('new_edu_space_cmpt_delete', async (id) => {
            await NewEduSpaceCmptService.deleteNewEduSpaceCmpt(id);
            io.emit('new_edu_space_cmpt_deleted', id);
        });

        socket.on('new_edu_space_cmpt_add', async (newESCmpt) => {
            console.log('new_edu_space_cmpt_add', newESCmpt);
            newESCmpt.cmpt = await CompetenseService.getCmptById(newESCmpt.cmpt);
            newESCmpt = await NewEduSpaceCmptService.createNewEduSpaceCmpt(newESCmpt);
            io.emit('new_edu_space_cmpt_added', newESCmpt);
        });

        socket.on('get_all_cmpts_for_new_edu_space', async (newESId) => {
            const cmpts = await NewEduSpaceCmptService.getAllCmptsForNewEduSpace(newESId);
            io.emit('receive_all_cmpts_for_new_edu_space', cmpts);
        });

        socket.on('get_all_new_edu_spaces_for_cmpt', async (cmptId) => {
            const newESs = await NewEduSpaceCmptService.getAllNewEduSpacesForCmpt(cmptId);
            io.emit('receive_all_new_edu_spaces_for_cmpt', newESs);
        });

        socket.on('course_relation_delete', async (id, parent) => {
            await CourseService.deleteCourseRelation(id, parent);
            const course = await CourseService.getCourseById(id);
            io.emit('course_added', course);
        });

        socket.on('course_relation_add', async (id, parent) => {
            console.log('Add course relation:', {
                id: null,
                parentCourse: parent,
                childCourse: id
              })
            await CourseService.createCourseRelation({
                id: null,
                parentCourse: parent,
                childCourse: id
              });
            const course = await CourseService.getCourseById(id);
            io.emit('course_added', course);
        });

        // socket.on('course_relation_add', async (CourseRelation) => {
        //     console.log('Add course relation:', CourseRelation)
        //     await CourseService.createCourseRelation(CourseRelation);
        //     const course = await CourseService.getCourseById(CourseRelation.childCourse);
        //     io.emit('course_added', course);
        // });
    }
}

export default new SocketHandler();

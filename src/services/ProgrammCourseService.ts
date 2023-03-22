import { getRepository } from "typeorm";
import { Programm } from "../entity/Programm";
import { ProgrammCourse } from "../entity/ProgrammCourse";

class ProgrammCourseService {
    createProgCourse = async(progCourse: ProgrammCourse, parentProgramm?: Programm) => {
        const prCourse = await getRepository(ProgrammCourse).findOne({where: {course: progCourse.course, programm: progCourse.programm}})
        if (prCourse instanceof ProgrammCourse) {
            console.log("Current prCourse: " + JSON.stringify(prCourse));
            return;
        }

        const createPrCourse = await getRepository(ProgrammCourse).create(progCourse);
        return await getRepository(ProgrammCourse).save(createPrCourse);
        //let result =[];
        // await getRepository(ProgrammCourse).save(createPrCourse).then(data => {result.concat(data)});    
        // const programm = await getRepository(Programm).findOne({ where: { id: progCourse.programm.id},
        //                                                          relations:  ['childProgramm'],
        //                                                        })        
        // .then(async data => {                                        
        //     if (data.childProgramm) {
        //         for (const item of data.childProgramm) {
        //             let newPrCourse = {id: null, course: progCourse.course, programm: item, parentProgramm: parentProgramm};
        //             await this.createProgCourse(newPrCourse, parentProgramm);
        //         }
        //     }
        // }); 
        // return result;       
    }

    getProgCourseById = async(id: number) => {
        if (!id) return;
        return await getRepository(ProgrammCourse).findOne({where: {id: id}, relations: ["course", "programm"]});
    }

    getAllCourseForProgramm = async(idProgramm: number) => {    
        let result = await getRepository(ProgrammCourse).find({relations: ['course'],                                                               
                                                               where : { programm : { id : idProgramm}}
                                                              });
        return result;
    }

    getAllProgForCourse = async(idCourse: number) => {
        let result = await getRepository(ProgrammCourse).find({select: ['id'],
                                                               join: {
                                                                        alias: 'progCourse',
                                                                        innerJoinAndSelect: {course: 'progCourse.programm'}
                                                                     },
                                                               where : { course : { id : idCourse}}
                                                              });
        return result;
    }

    saveProgrammCourse = async(progCourse: ProgrammCourse) => {
        let result = await getRepository(ProgrammCourse).save(progCourse);
        return result;
    }

    deleteProgrammCourse = async(id: number) => {
        if(!id) return;
        const result = await getRepository(ProgrammCourse).findOne(id);
        if (!result) return;
        return await getRepository(ProgrammCourse).delete(id);
    }

}

export default new ProgrammCourseService();
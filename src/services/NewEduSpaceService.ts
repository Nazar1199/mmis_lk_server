import { getRepository } from "typeorm";
import { NewEduSpace } from "../entity/NewEduSpace";

class NewEduSpaceService {
    createNewES = async(newES: NewEduSpace) => {
        const curNewES = await getRepository(NewEduSpace).findOne({where: { parentNewEduSpace: newES.parentNewEduSpace, 
                                                                            programm:newES.programm,    
                                                                            course: newES.course, 
                                                                            typeES: newES.typeES,
                                                                            startDate: newES.startDate
                                                                            /*cmpt: newES.cmpt*/}});
        if (curNewES instanceof NewEduSpace) {
            console.log("Current NewEduSpace: " + JSON.stringify(curNewES));
            return;
        }

        const result = await getRepository(NewEduSpace).create(newES);
        return await getRepository(NewEduSpace).save(result);
    }

    getNewESById = async (id:number) => {
        if (!id) return;
        let result = await getRepository(NewEduSpace).findOne(id);
        return result;
    }
    
    getAllNewES = async () => {
        let newESs = await getRepository(NewEduSpace).find({relations: ["programm", "parentNewEduSpace", "typeES", "eduForm", /*"cmpt",*/ "course"]});
        return newESs.map(i => {
            return {
                id: i.id, name: i.name, programm: i.programm, eduForm: i.eduForm, typeES: i.typeES, /*cmpt: i.cmpt,*/ course: i.course,
                startDate: i.startDate, endDate: i.endDate, 
                parentNewEduSpaceId: i.parentNewEduSpace? i.parentNewEduSpace.id : null
            }
        });
    }

    getAllCoursesForES = async(idES: number) => {
        const result = await getRepository(NewEduSpace)
            .createQueryBuilder("newES")
            .leftJoinAndSelect("newES.childNewEduSpace", "childNewEduSpace")
            .leftJoinAndSelect("newES.course", "course") 
            .where("newES.parentNewEduSpace = :parentNewEduSpace", {parentNewEduSpace: idES})
            .distinctOn(['course'])
            //.innerJoin("newES.cmpt", "cmpt", "newES.course = course.id")
            .getMany();
        return result;                                                                                                                 
    }

    saveNewES = async(value: NewEduSpace) => {
        if (!value) return;
        let result = await getRepository(NewEduSpace).save(value);
        return result;
    }

    deleteNewES = async(id: number) => {
        if (!id) return;
        return await getRepository(NewEduSpace).delete(id);
    }
}

export default new NewEduSpaceService();
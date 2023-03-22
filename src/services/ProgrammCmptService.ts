import { getRepository } from "typeorm";
import { callbackify } from "util";
import { Programm } from "../entity/Programm";
import { ProgrammCmpt } from "../entity/ProgrammCmpt";

class ProgrammCmptService {
    createProgrammCmpt = async(progCmpt: ProgrammCmpt, parentProgramm?: Programm) => {
        const prCmpt = await getRepository(ProgrammCmpt).findOne({where: {cmpt: progCmpt.cmpt, programm: progCmpt.programm}})
        if (prCmpt instanceof ProgrammCmpt) {
            console.log("Current prCmpt: " + JSON.stringify(prCmpt));
            return;
        }
        let createProgCmpt = await getRepository(ProgrammCmpt).create(progCmpt);
        let result =[];
        await getRepository(ProgrammCmpt).save(createProgCmpt).then(data => {result.concat(data)});
        let programm = await getRepository(Programm).findOne({
                                                                where: { id: progCmpt.programm.id},
                                                                relations:  ['childProgramm'],
                                                            });
        console.log("Child of programm: " + JSON.stringify(programm.childProgramm));
        if (programm.childProgramm) {
            programm.childProgramm.forEach(item => {
                let newProgCmpt  = getRepository(ProgrammCmpt).create();
                console.log("newProgCmpt: " + newProgCmpt);
                newProgCmpt.cmpt = progCmpt.cmpt;
                newProgCmpt.programm = item;
                newProgCmpt.parentProgramm = parentProgramm;
                this.createProgrammCmpt(newProgCmpt,parentProgramm);
            })
        }
        
        console.log("Result: " + JSON.stringify(result))
        return result;
    }

    createProgCmpt = async(progCmpt: ProgrammCmpt, result: ProgrammCmpt[], parentProgramm?: Programm) => {
        const prCmpt = await getRepository(ProgrammCmpt).findOne({where: {cmpt: progCmpt.cmpt, programm: progCmpt.programm}})
        if (prCmpt instanceof ProgrammCmpt) {
            console.log("Current prCmpt: " + JSON.stringify(prCmpt));
            return;
        }

        const createPrCmpt = await getRepository(ProgrammCmpt).create(progCmpt);
        await getRepository(ProgrammCmpt).save(createPrCmpt).then(data => {
            result.push(data)
            console.log("result: " + JSON.stringify(result))
        });    
        const programm = await getRepository(Programm).findOne({ where: { id: progCmpt.programm.id},
                                                                 relations:  ['childProgramm'],
                                                               })        
        .then(async data => {                                        
            if (data.childProgramm) {
                for (const item of data.childProgramm) {
                    let newProgCmpt = {id: null, cmpt: progCmpt.cmpt, programm: item, parentProgramm: parentProgramm};
                    await this.createProgCmpt(newProgCmpt, result, parentProgramm);
                }
            }
        });       
        // if (programm instanceof Programm && programm.childProgramm) {
        //     programm.childProgramm.map(async item => {
        //         let newProgCmpt = {id: null, cmpt: progCmpt.cmpt, programm: item, parentProgramm: parentProgramm};
        //         await this.createProgCmpt(newProgCmpt, result, parentProgramm);
        //     })
        // }    
    }

    getProgCmptById = async(id: number) => {
        if(!id) {
            throw new Error("");
        }
        let progCmpt = await getRepository(ProgrammCmpt).findOne({where: {id: id}, relations: ["cmpt", "programm"]});
        return progCmpt;
    }

    getAllCmptForProgramm = async(idProgramm: number) => {    
        let allCmptProg = await getRepository(ProgrammCmpt).find({relations: ['cmpt', 'parentProgramm'],                                                               
                                                                  where : { programm : { id : idProgramm}}
                                                                });
        return allCmptProg;
    }

    getAllProgrammForCmpt = async(idCmpt: number) => {
        let allProgCmpt = await getRepository(ProgrammCmpt).find({select: ['id'],
                                                                  join: {
                                                                          alias: 'progCmpt',
                                                                          innerJoinAndSelect: {cmpt: 'progCmpt.programm'}
                                                                        },
                                                                  where : { cmpt : { id : idCmpt}}
                                                                });
        return allProgCmpt;
    }

    saveProgrammCmpt = async(progCmpt: ProgrammCmpt) => {
        let saveProgCmpt = await getRepository(ProgrammCmpt).save(progCmpt);
        return saveProgCmpt;
    }

    saveProgCmptFromParentProgramm = async(programm: Programm) => {
        let progCmpt = await this.getAllCmptForProgramm(programm.parentProgramm.id)
        if (!progCmpt) return;
        for (const item of progCmpt) {
            let newProgCmpt = {id: null, cmpt: item.cmpt, programm: programm, parentProgramm: item.parentProgramm ? item.parentProgramm : programm.parentProgramm};
            this.saveProgrammCmpt(newProgCmpt);
        }
    }

    deleteProgrammCmpt = async(progCmpt: ProgrammCmpt) => {
        if(!progCmpt) {
            throw new Error("");
        }
        const progsCmpt = await getRepository(ProgrammCmpt).find({where: [{id: progCmpt.id}, {parentProgramm: progCmpt.programm, cmpt: progCmpt.cmpt}],
                                                                  relations: ["cmpt", "programm"] 
                                                                 });
        await getRepository(ProgrammCmpt).createQueryBuilder("progCmpt")
            .delete()
            .from(ProgrammCmpt)
            .where("id = :id", { id: progCmpt.id})
            .orWhere("parentProgramm = :parentProgramm and cmpt = :cmpt", {parentProgramm: progCmpt.programm ? progCmpt.programm.id : null, cmpt: progCmpt.cmpt.id })
            .execute();

        return progsCmpt;
    }
}

export default new ProgrammCmptService();
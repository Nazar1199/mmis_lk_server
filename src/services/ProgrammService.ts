import { performance } from "perf_hooks";
import { getRepository} from "typeorm";
import { DirectoryProgramm } from "../entity/DirectoryProgramm";
import { Programm } from "../entity/Programm";
import ProgrammCmptService from "./ProgrammCmptService";

class ProgrammService {

    createProgramm = async (programm: Programm) => {
        let createProgramm = await getRepository(Programm).create(programm);
        let result = await getRepository(Programm).save(createProgramm);
        console.log("Parent for programm: " + JSON.stringify(result))
        if (result.parentProgramm) {
            const t_start =  performance.now();
            await ProgrammCmptService.saveProgCmptFromParentProgramm(result);
            const t_end =  performance.now();
            console.log("Time: " + (t_end - t_start).toString())
        }
        return result;
    }

    getAllProgramms = async () => {
        let programms = await getRepository(Programm).find({relations: ['parentProgramm', 'dirProgramm', 'typeGOS']}); //{where: {'parentProgramm' : null}, relations: ['parentProgramm', 'childProgramm', 'dirProgramm']}           
        return this.listToTree(programms);
    }
    getAllProgrammsList = async () => {
        let programms = await getRepository(Programm).find({relations: ['parentProgramm', 'dirProgramm', 'typeGOS']}); //{where: {'parentProgramm' : null}, relations: ['parentProgramm', 'childProgramm', 'dirProgramm']}       
        return programms.map(m=> { return { id: m.id, name: m.name, index: m.index, typeGOSId: m.typeGOS ? m.typeGOS.id : null, dirProgramm: m.dirProgramm, dirProgrammId: m.dirProgramm ? m.dirProgramm.id : null, parentProgramm: m.parentProgramm, parentProgrammID: m.parentProgramm ? m.parentProgramm.id : null } });
    }
    getAllTreeProgramms = async () => {
        let programms = await getRepository(Programm).find(); //{where: {'parentProgramm' : null}, relations: ['parentProgramm', 'childProgramm', 'dirProgramm']}           
        //let programms = await getTreeRepository(Programm).findTrees(); 
        return programms;
    }

    getProgrammById = async(id: number, bWithRelations: boolean = false) => {
        if (!id) {
            throw new Error("");
        }
        let programm = await getRepository(Programm).findOne({
            where: { id: id},
            relations: bWithRelations ? ['childProgramm', 'dirProgramm', 'typeGOS'] : ['dirProgramm', 'typeGOS'],
          });
        return programm;
    }

    getProgrammByType = async(typeProgramm: DirectoryProgramm) => {
        let programms = await getRepository(Programm).find({dirProgramm: typeProgramm});
        return programms;
    } 

    saveProgramm = async(programm: Programm) => {
        if (!programm) return;
        return await getRepository(Programm).save(programm);
    }

    deleteProgramm = async(id: number) => {
        if (!id) return;
        let programmToRemove = await getRepository(Programm).findOne(id);
        if (!programmToRemove) return;
        return await getRepository(Programm).delete(id);
    }

    listToTree(list) {
        let map = {}, node, roots = [], i;
        
        for (i = 0; i < list.length; i += 1) {
          map[list[i].id] = i; // initialize the map
          list[i].childProgramm = []; // initialize the children
        }
        
        for (i = 0; i < list.length; i += 1) {
          node = list[i];
          if (node.parentProgramm !== null) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parentProgramm.id]].childProgramm.push(node);
          } else {
            roots.push(node);
          }
        }
        return roots;
    }

    getTypeGOSforProgramm(programms: Programm[]) {
        let programm;
        programms.forEach(async element => {
            console.log("Element: " + element.name);     
            programm = await getRepository(Programm).findOne({
                where: { id: element.id},
                relations: ['dirProgramm', 'typeGOS'],
              });
            element.typeGOS = programm.typeGOS;
            console.log("Read typeGOS of programm: " + element.typeGOS);
            if (element.childProgramm && element.childProgramm.length>0) this.getTypeGOSforProgramm(element.childProgramm)
        });
        return programms;
    }
}

export default new ProgrammService();
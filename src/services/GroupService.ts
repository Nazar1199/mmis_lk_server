import { getRepository } from "typeorm";
import { Group } from "../entity/Group";

class GroupService {
    createGroup = async (group: Group) => {
        let createGroup = getRepository(Group).create(group);
        let result = await getRepository(Group).save(createGroup);
        return result;
    }

    getAllGroups = async () => {
        let allGroups = await getRepository(Group).find(); 
        console.log("Groups: " + JSON.stringify(allGroups));
        return allGroups;
    }

    getGroupById = async(id: number) => {
        if(!id) return;
        let group = await getRepository(Group).findOne(id);
        return group;
    }

    saveGroup = async(group: Group) => {
        if(!group) return;
        let saveGroup = await getRepository(Group).save(group);
        return saveGroup;
    }

    deleteGroup = async(id: number) => {
        if(!id) return;
        return await getRepository(Group).delete(id);
    }
}

export default new GroupService();
import { getRepository } from "typeorm";
import { Status } from "../entity/Status";

class StatusService {
    createStatus = async (status: Status) => {
        let createStatus = getRepository(Status).create(status);
        let result = await getRepository(Status).save(createStatus);
        return result;
    }

    getAllStatuses = async () => {
        let allStatuses = await getRepository(Status).find(); 
        console.log("Statuses: " + JSON.stringify(allStatuses));
        return allStatuses;
    }

    getStatusById = async(id: number) => {
        if(!id) return;
        let status = await getRepository(Status).findOne(id);
        return status;
    }

    saveStatus = async(status: Status) => {
        if(!status) return;
        let saveStatus = await getRepository(Status).save(status);
        return saveStatus;
    }

    deleteStatus = async(id: number) => {
        if(!id) return;
        return await getRepository(Status).delete(id);
    }
}

export default new StatusService();
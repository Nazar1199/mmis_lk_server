import { getRepository } from "typeorm";
import { Department } from "../entity/Department";

class DepartmentService {
    createDepartment = async (status: Department) => {
        let createDepartment = getRepository(Department).create(status);
        let result = await getRepository(Department).save(createDepartment);
        return result;
    }

    getAllDepartments = async () => {
        let allDepartments = await getRepository(Department).find(); 
        console.log("Departments: " + JSON.stringify(allDepartments));
        return allDepartments;
    }

    getDepartmentById = async(id: number) => {
        if(!id) return;
        let status = await getRepository(Department).findOne(id);
        return status;
    }

    saveDepartment = async(position: Department) => {
        if(!position) return;
        let saveDepartment = await getRepository(Department).save(position);
        return saveDepartment;
    }

    deleteDepartment = async(id: number) => {
        if(!id) return;
        return await getRepository(Department).delete(id);
    }
}

export default new DepartmentService();
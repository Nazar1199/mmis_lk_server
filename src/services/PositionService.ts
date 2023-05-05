import { getRepository } from "typeorm";
import { Position } from "../entity/Position";

class PositionService {
    createPosition = async (status: Position) => {
        let createPosition = getRepository(Position).create(status);
        let result = await getRepository(Position).save(createPosition);
        return result;
    }

    getAllPositions = async () => {
        let allPositiones = await getRepository(Position).find(); 
        console.log("Positiones: " + JSON.stringify(allPositiones));
        return allPositiones;
    }

    getPositionById = async(id: number) => {
        if(!id) return;
        let status = await getRepository(Position).findOne(id);
        return status;
    }

    savePosition = async(position: Position) => {
        if(!position) return;
        let savePosition = await getRepository(Position).save(position);
        return savePosition;
    }

    deletePosition = async(id: number) => {
        if(!id) return;
        return await getRepository(Position).delete(id);
    }
}

export default new PositionService();
import { getRepository } from "typeorm";
import { OrderingReference } from "../entity/OrderingReference";

class OrderingReferenceService {
    createOrderingReference = async (orderingReference: OrderingReference) => {
        let createOrderingReferences = getRepository(OrderingReference).create(orderingReference);
        let result = await getRepository(OrderingReference).save(createOrderingReferences);
        return result;
    }

    getAllOrderingReferences = async () => {
        let allOrderingReferences = await getRepository(OrderingReference).find({
            relations: ['reference', 'status']
        }); 
        console.log("Ordering references: " + JSON.stringify(allOrderingReferences));
        return allOrderingReferences;
    }

    getOrderingReferenceById = async(id: number) => {
        if(!id) return;
        let orderingReference = await getRepository(OrderingReference).find({
            relations: ['reference', 'status'],
            where: {id: id}
        });
        return orderingReference;
    }

    getAllOrderingReferencesForStudent = async(idStudent: number) => {
        if(!idStudent) return;
        let orderingReference = await getRepository(OrderingReference).find({
            relations: ['reference', 'status'],
            where: {student: idStudent}
        });
        return orderingReference;
    }

    saveOrderingReference = async(orderingReference: OrderingReference) => {
        if(!orderingReference) return;
        let saveOrderingReferences = await getRepository(OrderingReference).save(orderingReference);
        return saveOrderingReferences;
    }

    deleteOrderingReference = async(id: number) => {
        if(!id) return;
        return await getRepository(OrderingReference).delete(id);
    }
}

export default new OrderingReferenceService();
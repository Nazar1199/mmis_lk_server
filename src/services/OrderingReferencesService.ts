import { getRepository } from "typeorm";
import { OrderingReferences } from "../entity/OrderingReferences";

class OrderingReferencesService {
    createOrderingReferences = async (orderingReference: OrderingReferences) => {
        let createOrderingReferences = getRepository(OrderingReferences).create(orderingReference);
        let result = await getRepository(OrderingReferences).save(createOrderingReferences);
        return result;
    }

    getAllOrderingReferences = async () => {
        let allOrderingReferences = await getRepository(OrderingReferences).find(); 
        console.log("Ordering references: " + JSON.stringify(allOrderingReferences));
        return allOrderingReferences;
    }

    getOrderingReferencesById = async(id: number) => {
        if(!id) return;
        let orderingReference = await getRepository(OrderingReferences).findOne(id);
        return orderingReference;
    }

    saveOrderingReferences = async(orderingReference: OrderingReferences) => {
        if(!orderingReference) return;
        let saveOrderingReferences = await getRepository(OrderingReferences).save(orderingReference);
        return saveOrderingReferences;
    }

    deleteOrderingReferences = async(id: number) => {
        if(!id) return;
        return await getRepository(OrderingReferences).delete(id);
    }
}

export default new OrderingReferencesService();
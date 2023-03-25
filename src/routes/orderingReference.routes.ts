import { Router } from "express";
import { OrderingReferenceController } from "../controller/OrderingReferenceController";

const OrderingReferenceRoutes = Router();

OrderingReferenceRoutes.get("/", OrderingReferenceController.getAllOrderingReferences);
OrderingReferenceRoutes.get("/:id", OrderingReferenceController.getOrderingReferenceById);
OrderingReferenceRoutes.get("/student/:id", OrderingReferenceController.getAllOrderingReferencesForStudent);
OrderingReferenceRoutes.post("/", OrderingReferenceController.createOrderingReference);
OrderingReferenceRoutes.put("/:id", OrderingReferenceController.saveOrderingReference);
OrderingReferenceRoutes.delete("/:id", OrderingReferenceController.deleteOrderingReference);

export default OrderingReferenceRoutes;
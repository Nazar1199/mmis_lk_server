import { Router } from "express";
import { OrderingReferenceController } from "../controller/OrderingReferenceController";
import checkJwtAdmin from "../middleware/jwtAdmin";
import checkJwtAuth from "../middleware/jwt";

const OrderingReferenceRoutes = Router();

OrderingReferenceRoutes.get("/me", checkJwtAuth, OrderingReferenceController.getAllOrderingReferencesForMe);
OrderingReferenceRoutes.post("/me", checkJwtAuth, OrderingReferenceController.createOrderingReferenceForMe);
OrderingReferenceRoutes.get("/", checkJwtAdmin, OrderingReferenceController.getAllOrderingReferences);
OrderingReferenceRoutes.get("/:id", checkJwtAdmin, OrderingReferenceController.getOrderingReferenceById);
OrderingReferenceRoutes.get("/student/:id", checkJwtAdmin, OrderingReferenceController.getAllOrderingReferencesForStudent);
OrderingReferenceRoutes.post("/", checkJwtAdmin, OrderingReferenceController.createOrderingReference);
OrderingReferenceRoutes.put("/:id", checkJwtAdmin, OrderingReferenceController.saveOrderingReference);
OrderingReferenceRoutes.delete("/:id", checkJwtAdmin, OrderingReferenceController.deleteOrderingReference);

export default OrderingReferenceRoutes;
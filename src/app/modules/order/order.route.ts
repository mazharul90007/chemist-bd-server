import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";
import { orderController } from "./order.controller";

const router = Router();
router.post(
  "/create",
  auth(UserRole.CUSTOMER),
  orderController.createOrderFromCart,
);

router.get("/", auth(UserRole.CUSTOMER), orderController.getMyOrders);
router.get("/:id", auth(UserRole.CUSTOMER), orderController.getOrderById);

export const orderRoutes = router;

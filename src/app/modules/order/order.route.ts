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

export const orderRoutes = router;

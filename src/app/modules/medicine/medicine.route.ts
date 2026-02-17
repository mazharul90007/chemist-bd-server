import { Router } from "express";
import { medicineController } from "./medicine.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";

const router = Router();

router.post(
  "/",
  auth(UserRole.SELLER, UserRole.ADMIN),
  medicineController.createMedicine,
);

export const medicineRoutes = router;

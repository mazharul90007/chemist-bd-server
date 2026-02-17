import express from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { adminRoutes } from "../modules/admin/admin.route";
import { medicineRoutes } from "../modules/medicine/medicine.route";
import { categoryRoutes } from "../modules/category/category.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
  {
    path: "/medicine",
    route: medicineRoutes,
  },
  {
    path: "/category",
    route: categoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

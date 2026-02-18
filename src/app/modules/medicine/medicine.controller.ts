import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { medicineService } from "./medicine.service";
import { IcreateMedicine } from "./medicine.type";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { IauthUser } from "../../../types/common";

//==============Create medicine=================
const createMedicine = catchAsync(async (req: Request, res: Response) => {
  const medicineData = req.body;
  const sellerId = req.user?.id;
  const payload = { ...medicineData, sellerId };

  const result = await medicineService.createMedicine(
    payload as IcreateMedicine,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Medicine created successfully",
    data: result,
  });
});

//============Get medicine by Id===============
const getMedicineById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await medicineService.getMedicineById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Medicine data fetched successfully",
    data: result,
  });
});

//============Update medicine by Id===========
const updateMedicine = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const sellerId = req.user?.id as string;
  const payload = req.body;
  const result = await medicineService.updateMedicine(id, sellerId, payload);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Medicine data updated successfully",
    data: result,
  });
});

//============Remove medicine by Id===========
const removeMedicine = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const currentUser = req.user as IauthUser;

  const result = await medicineService.removeMedicine(id, currentUser);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Medicine removed successfully",
    data: result,
  });
});

export const medicineController = {
  createMedicine,
  getMedicineById,
  updateMedicine,
  removeMedicine,
};

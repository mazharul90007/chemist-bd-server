import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { medicineService } from "./medicine.service";
import { IcreateMedicine } from "./medicine.type";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";

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

export const medicineController = {
  createMedicine,
};

import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { adminService } from "./admin.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { UserStatus } from "../../../../generated/prisma/enums";


//===============Get All Users===============
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllUsers();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Users data fetched successfully",
    data: result,
  });
});

//===============Update User Status===============
const updateUserStatus = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const updatedStatus = req.body.status as UserStatus;
  const result = await adminService.updateUserStatus(id, updatedStatus);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User status updated successfully",
    data: result,
  });
});



export const adminController = {
  getAllUsers,
  updateUserStatus,
};

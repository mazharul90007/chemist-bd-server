import catchAsync from "../../../shared/catchAsync";
import { adminService } from "./admin.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
//===============Get All Users===============
const getAllUsers = catchAsync(async (req, res) => {
    const result = await adminService.getAllUsers();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Users data fetched successfully",
        data: result,
    });
});
//===============Update User Status===============
const updateUserStatus = catchAsync(async (req, res) => {
    const id = req.params.id;
    const updatedStatus = req.body.status;
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
//# sourceMappingURL=admin.controller.js.map
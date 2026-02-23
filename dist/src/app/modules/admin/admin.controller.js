import catchAsync from "../../../shared/catchAsync";
import { adminService } from "./admin.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { userFilterableFields } from "./admin.constant";
import pick from "../../../shared/pick";
//===============Get All Users===============
const getAllUsers = catchAsync(async (req, res) => {
    const filters = pick(req.query, userFilterableFields);
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const result = await adminService.getAllUsers(filters, options);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Users data fetched successfully",
        meta: result.meta,
        data: result.data,
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
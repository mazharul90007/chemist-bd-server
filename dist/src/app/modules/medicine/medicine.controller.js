import catchAsync from "../../../shared/catchAsync";
import { medicineService } from "./medicine.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
//==============Create medicine=================
const createMedicine = catchAsync(async (req, res) => {
    const medicineData = req.body;
    const sellerId = req.user?.id;
    const payload = { ...medicineData, sellerId };
    const result = await medicineService.createMedicine(payload);
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
//# sourceMappingURL=medicine.controller.js.map
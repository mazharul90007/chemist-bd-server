import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { orderService } from "./order.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";

//=================Create Order from Cart==================
const createOrderFromCart = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const payload = req.body;
  const result = await orderService.createOrderFromCart(userId, payload);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Order placed successfully. Selected items removed from cart.",
    data: result,
  });
});

export const orderController = {
  createOrderFromCart,
};

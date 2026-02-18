import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { orderService } from "./order.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import pick from "../../../shared/pick";
import { orderFilterableFields } from "./order.constant";

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

//===============Get My Orders==================
const getMyOrders = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;

  const filters = pick(req.query, orderFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);

  const result = await orderService.getMyOrders(userId, filters, options);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Orders fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

//================Get Order details by Id==============
const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const userId = req.user?.id as string;
  const result = await orderService.getOrderById(id, userId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Order details fetched successfully",
    data: result,
  });
});

export const orderController = {
  createOrderFromCart,
  getMyOrders,
  getOrderById,
};

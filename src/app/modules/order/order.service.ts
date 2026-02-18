import { prisma } from "../../../lib/prisma";
import calculatePagination from "../../helpers/paginationHelpers";
import { generatedOrderNo } from "./order.utils";

//=================Create Order from Cart==================
const createOrderFromCart = async (
  userId: string,
  payload: {
    cartItemIds: string[];
    shippingAddress: string;
    contactNumber: string;
  },
) => {
  const { cartItemIds, shippingAddress, contactNumber } = payload;
  return await prisma.$transaction(async (tx) => {
    //Fetch only the selected cartItems and the medicine info
    const selectedCartItem = await tx.cartItem.findMany({
      where: {
        id: { in: cartItemIds },
        cart: { userId },
      },
      include: { medicine: true },
    });

    if (selectedCartItem.length === 0) {
      throw new Error("No valid items found");
    }

    //Calculate price
    let totalAmount = 0;
    for (const item of selectedCartItem) {
      totalAmount += item.medicine.price * item.quantity;
    }

    //Create Oreder
    const order = await tx.order.create({
      data: {
        orderNo: generatedOrderNo(),
        totalAmount,
        dueAmount: totalAmount,
        customerId: userId,
        shippingAddress,
        contactNumber,
      },
    });

    //Transform CartItem into OrderItems
    for (const item of selectedCartItem) {
      await tx.orderItem.create({
        data: {
          orderId: order.id,
          medicineId: item.medicineId,
          quantity: item.quantity,
          unitPrice: item.medicine.price,
        },
      });
    }

    //remove the ordered items from cart
    await tx.cartItem.deleteMany({
      where: { id: { in: cartItemIds } },
    });

    return order;
  });
};

//===============Get My Orders==================
const getMyOrders = async (userId: string, filters: any, options: any) => {
  const { searchTerm, ...filterData } = filters;
  const { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);

  //verify ownership and search by staus and payment status
  const where: any = {
    customerId: userId,
    ...filterData,
  };

  //search by order no
  if (searchTerm) {
    where.orderNo = {
      contains: searchTerm,
      mode: "insensitive",
    };
  }

  const result = await prisma.order.findMany({
    where,
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      orderItems: {
        include: {
          medicine: true,
        },
      },
    },
  });

  const total = await prisma.order.count({ where });

  return {
    meta: { page, limit, total },
    data: result,
  };
};

//================Get Order details by Id==============
const getOrderById = async (orderId: string, userId: string) => {
  const result = await prisma.order.findUniqueOrThrow({
    where: {
      id: orderId,
      customerId: userId,
    },
    include: {
      orderItems: {
        include: {
          medicine: true,
        },
      },
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return result;
};

export const orderService = {
  createOrderFromCart,
  getMyOrders,
  getOrderById,
};

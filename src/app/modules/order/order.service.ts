import { prisma } from "../../../lib/prisma";
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

export const orderService = {
  createOrderFromCart,
};

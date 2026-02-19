import { OrderStatus } from "../../../../generated/prisma/enums";
export declare const orderService: {
    createOrderFromCart: (userId: string, payload: {
        cartItemIds: string[];
        shippingAddress: string;
        contactNumber: string;
    }) => Promise<any>;
    getMyOrders: (userId: string, filters: any, options: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: any;
        };
        data: any;
    }>;
    getOrderById: (orderId: string, userId: string) => Promise<any>;
    updateOrderStatus: (orderId: string, status: OrderStatus, user: {
        id: string;
        role: string;
    }) => Promise<any>;
    getSellerOrders: (sellerId: string, filters: any, options: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: any;
        };
        data: any;
    }>;
    cancelOrder: (orderId: string, userId: string) => Promise<any>;
};
//# sourceMappingURL=order.service.d.ts.map
export declare const authServices: {
    getUserById: (id: string) => Promise<{
        orders: {
            status: import("../../../../generated/prisma/enums").OrderStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            orderNo: string;
            totalAmount: number;
            dueAmount: number;
            paymentStatus: import("../../../../generated/prisma/enums").PaymentStatus;
            contactNumber: string;
            shippingAddress: string;
            customerId: string;
        }[];
        reviews: {
            status: import("../../../../generated/prisma/enums").ReviewStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            medicineId: string;
        }[];
    } & {
        name: string | null;
        role: import("../../../../generated/prisma/enums").UserRole;
        status: import("../../../../generated/prisma/enums").UserStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        phone: string | null;
    }>;
    getMyProfile: (id: string) => Promise<{
        name: string | null;
        role: import("../../../../generated/prisma/enums").UserRole;
        status: import("../../../../generated/prisma/enums").UserStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        phone: string | null;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map
export declare const authServices: {
    getUserById: (id: string) => Promise<{
        reviews: {
            status: import("../../../../prisma/generated/prisma/enums").ReviewStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            medicineId: string;
        }[];
        orders: {
            status: import("../../../../prisma/generated/prisma/enums").OrderStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            orderNo: string;
            totalAmount: number;
            dueAmount: number;
            paymentStatus: import("../../../../prisma/generated/prisma/enums").PaymentStatus;
            customerId: string;
        }[];
    } & {
        name: string | null;
        role: import("../../../../prisma/generated/prisma/enums").UserRole;
        status: import("../../../../prisma/generated/prisma/enums").UserStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }>;
    getMyProfile: (id: string) => Promise<{
        name: string | null;
        role: import("../../../../prisma/generated/prisma/enums").UserRole;
        status: import("../../../../prisma/generated/prisma/enums").UserStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map
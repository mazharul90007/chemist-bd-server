import { UserStatus } from "../../../../generated/prisma/enums";
export declare const adminService: {
    getAllUsers: (filters: any, options: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            name: string | null;
            role: import("../../../../generated/prisma/enums").UserRole;
            status: UserStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            phone: string | null;
        }[];
    }>;
    updateUserStatus: (id: string, status: UserStatus) => Promise<{
        name: string | null;
        role: import("../../../../generated/prisma/enums").UserRole;
        status: UserStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        phone: string | null;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map
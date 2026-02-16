import { UserStatus } from "../../../../generated/prisma/enums";
export declare const adminService: {
    getAllUsers: () => Promise<{
        name: string | null;
        role: import("../../../../prisma/generated/prisma/enums").UserRole;
        status: import("../../../../prisma/generated/prisma/enums").UserStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }[]>;
    updateUserStatus: (id: string, status: UserStatus) => Promise<{
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
//# sourceMappingURL=admin.service.d.ts.map
import { prisma } from "../../../lib/prisma";
//===============Get All Users===============
const getAllUsers = async () => {
    const result = await prisma.user.findMany();
    return result;
};
//===============Update User Status===============
const updateUserStatus = async (id, status) => {
    const result = await prisma.user.update({
        where: { id },
        data: {
            status,
        },
    });
    return result;
};
export const adminService = {
    getAllUsers,
    updateUserStatus,
};
//# sourceMappingURL=admin.service.js.map
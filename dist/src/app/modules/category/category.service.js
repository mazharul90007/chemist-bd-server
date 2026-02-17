import { prisma } from "../../../lib/prisma";
//===============Create Category===============
const createCategory = async (data) => {
    const result = await prisma.medicineCategory.create({
        data,
    });
    return result;
};
export const categoryService = {
    createCategory,
};
//# sourceMappingURL=category.service.js.map
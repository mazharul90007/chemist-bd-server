import { prisma } from "../../../lib/prisma";
//==============Create medicine=================
const createMedicine = async (payload) => {
    //check if category exist
    const existingCategory = await prisma.medicineCategory.findFirstOrThrow({
        where: { id: payload.categoryId },
    });
    const result = await prisma.medicine.create({
        data: payload,
    });
    return result;
};
export const medicineService = {
    createMedicine,
};
//# sourceMappingURL=medicine.service.js.map
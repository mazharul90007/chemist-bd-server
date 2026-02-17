import { prisma } from "../../../lib/prisma";
import { IcreateCategories } from "./category.interface";

//===============Create Category===============
const createCategory = async (data: IcreateCategories) => {
    const result = await prisma.medicineCategory.create({
        data,
    });

    return result;
};

export const categoryService = {
    createCategory,
};

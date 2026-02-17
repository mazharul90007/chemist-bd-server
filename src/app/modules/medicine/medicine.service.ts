import { prisma } from "../../../lib/prisma";
import { IcreateMedicine } from "./medicine.type";

//==============Create medicine=================
const createMedicine = async (payload: IcreateMedicine) => {
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

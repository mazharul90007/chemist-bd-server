import { UserRole } from "../../../../generated/prisma/enums";
import { prisma } from "../../../lib/prisma";
import { IauthUser } from "../../../types/common";
import { IcreateMedicine, IupdateMedicine } from "./medicine.type";

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

//============Get medicine by Id===============
const getMedicineById = async (id: string) => {
  const result = await prisma.medicine.findUnique({
    where: { id },
    include: {
      seller: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return result;
};

//============Update medicine by Id===========
const updateMedicine = async (
  id: string,
  sellerId: string,
  payload: IupdateMedicine,
) => {
  //check existing medicine
  const existingMedicine = await prisma.medicine.findUniqueOrThrow({
    where: { id },
  });

  //check ownership
  if (existingMedicine.sellerId !== sellerId) {
    throw new Error("You are not authorized to update this medicine");
  }

  const result = await prisma.medicine.update({
    where: {
      id: existingMedicine.id,
    },
    data: payload,
  });

  return result;
};

//============Remove medicine by Id===========
const removeMedicine = async (id: string, currentUser: IauthUser) => {
  //check existing medicine
  const existingMedicine = await prisma.medicine.findUnique({
    where: { id },
  });

  if (!existingMedicine) {
    throw new Error("Medicine not found");
  }

  //check ownership
  const isOwner = existingMedicine.sellerId === currentUser.id;
  const isAdmin = currentUser.role === UserRole.ADMIN;

  if (!isOwner && !isAdmin) {
    throw new Error("You are not authorized to delete this medicine");
  }

  const result = await prisma.medicine.delete({
    where: { id },
  });
};

export const medicineService = {
  createMedicine,
  getMedicineById,
  updateMedicine,
  removeMedicine,
};

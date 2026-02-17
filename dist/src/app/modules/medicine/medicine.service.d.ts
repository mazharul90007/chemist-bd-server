import { IcreateMedicine } from "./medicine.type";
export declare const medicineService: {
    createMedicine: (payload: IcreateMedicine) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../../../generated/prisma/enums").MedicineType;
        generic_name: string | null;
        strength: string | null;
        company: string;
        photoUrl: string | null;
        quantity: number;
        price: number;
        Indications: string | null;
        Pharmacology: string | null;
        dosage: string | null;
        side_effects: string | null;
        warnings: string | null;
        sellerId: string;
        categoryId: string;
    }>;
};
//# sourceMappingURL=medicine.service.d.ts.map
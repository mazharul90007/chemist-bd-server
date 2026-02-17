import { MedicineType } from "../../../../generated/prisma/enums";
export interface IcreateMedicine {
    sellerId: string;
    name: string;
    generic_name?: string;
    strength?: string;
    company: string;
    photoUrl?: string;
    quantity: number;
    price: number;
    Indications?: string;
    Pharmacology?: string;
    type: MedicineType;
    categoryId: string;
    dosage?: string;
    side_effects?: string;
    warnings?: string;
}
//# sourceMappingURL=medicine.type.d.ts.map
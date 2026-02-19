import { IauthUser } from "../../../types/common";
import { IcreateMedicine, IupdateMedicine } from "./medicine.type";
export declare const medicineService: {
    createMedicine: (payload: IcreateMedicine) => Promise<any>;
    getAllMedicines: (filters: any, options: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: any;
        };
        data: any;
    }>;
    getMedicineById: (id: string) => Promise<any>;
    updateMedicine: (id: string, sellerId: string, payload: IupdateMedicine) => Promise<any>;
    removeMedicine: (id: string, currentUser: IauthUser) => Promise<void>;
};
//# sourceMappingURL=medicine.service.d.ts.map
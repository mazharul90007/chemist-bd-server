export declare const UserRole: {
    readonly CUSTOMER: "CUSTOMER";
    readonly SELLER: "SELLER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly BLOCKED: "BLOCKED";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const MedicineType: {
    readonly SYRUP: "SYRUP";
    readonly TABLET: "TABLET";
    readonly CAPSULE: "CAPSULE";
    readonly OTHER: "OTHER";
};
export type MedicineType = (typeof MedicineType)[keyof typeof MedicineType];
export declare const MedicineCategory: {
    readonly ALLOPATHIC: "ALLOPATHIC";
    readonly HERBAL: "HERBAL";
    readonly OTHER: "OTHER";
};
export type MedicineCategory = (typeof MedicineCategory)[keyof typeof MedicineCategory];
export declare const ReviewStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly REJECTED: "REJECTED";
};
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];
export declare const PaymentStatus: {
    readonly PAID: "PAID";
    readonly UNPAID: "UNPAID";
    readonly PARTIAL_PAID: "PARTIAL_PAID";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly PACKAGING: "PACKAGING";
    readonly ON_THE_WAY: "ON_THE_WAY";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELED: "CANCELED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
//# sourceMappingURL=enums.d.ts.map
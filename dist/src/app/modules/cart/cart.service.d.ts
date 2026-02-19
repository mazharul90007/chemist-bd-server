export declare const cartService: {
    addItemToCart: (userId: string, medicineId: string) => Promise<any>;
    getMyCart: (userId: string) => Promise<any>;
    removeFromCart: (userId: string, cartItemId: string) => Promise<any>;
    updateCartItemQuantity: (userId: string, cartItemId: string, type: "increment" | "decrement") => Promise<any>;
};
//# sourceMappingURL=cart.service.d.ts.map
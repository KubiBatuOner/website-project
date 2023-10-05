import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        products: [],
        totalQuantity: 0,
        totalAmount: 0,
    },

    reducers: {
        addToCart(state, action) {
            const newProduct = action.payload;
            const existingProduct = state.products.find(
                (product) => product.id === newProduct.id
            );

            if (!existingProduct) {
                state.products.push({
                    id: newProduct.id,
                    price: newProduct.price,
                    quantity: 1,
                    totalPrice: newProduct.price,
                    title: newProduct.title,
                    brand: newProduct.brand,
                    image: newProduct.images[0],
                });
            } else {
                existingProduct.quantity++;
                existingProduct.totalPrice += newProduct.price;
            }
            state.totalQuantity++;
            state.totalAmount += newProduct.price;
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find(
                (product) => product.id === id
            );

            if (existingItem.quantity === 1) {
                state.products = state.products.filter(
                    (product) => product.id !== id
                );
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

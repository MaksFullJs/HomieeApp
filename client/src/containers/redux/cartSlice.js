import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalExpense: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action.payload)
            const newItem = action.payload;
            const existItem = state.cartItems.find((cartItem) => cartItem.item.id == newItem.item.id);
            console.log(existItem);
            state.cartTotalExpense += newItem.item.dailyExpense * newItem.count;
            if (!existItem) {
                state.cartItems.push(newItem);
            }
            else {
                existItem.count += newItem.count;
            }
        },
        removeFromCart(state, action) {
            const deleteItem = action.payload
            const currentItems = state.cartItems.filter((cartItem) => cartItem.item.id != deleteItem.item.id);
            state.cartItems = currentItems
            state.cartTotalExpense -= deleteItem.item.dailyExpense * deleteItem.count;
            console.log(state.cartTotalExpense)
        },
        increaseCount(state, action) {
            const existItem = action.payload;
            const existIndex = state.cartItems.findIndex((cartItem) => cartItem.item.id == existItem.item.id);
            state.cartItems[existIndex].count += 1;
            state.cartTotalExpense += state.cartItems[existIndex].item.dailyExpense;
        },
        decreaseCount(state, action) {
            const existItem = action.payload;
            const existIndex = state.cartItems.findIndex((cartItem) => cartItem.item.id == existItem.item.id);
            state.cartItems[existIndex].count -= 1;
            state.cartTotalExpense -= state.cartItems[existIndex].item.dailyExpense;
        }
    },
});

export const {addToCart, removeFromCart, increaseCount, decreaseCount} = cartSlice.actions;
export default cartSlice.reducer;
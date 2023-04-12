import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
	title: string;
	quantity: number;
	price: number;
}

interface CartState {
	items: CartItem[];
	totalBill: number;
}

const initialState: CartState = {
	items: [],
	totalBill: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const newItem = action.payload;

			state.items = state.items.map((item) => {
				if (item.title === newItem.title) {
					item.quantity += 1;
					state.totalBill += item.price;
				}
				return item;
			});

			if (!state.items.some((item) => item.title === newItem.title)) {
				state.items.push(newItem);
				state.totalBill += newItem.price;
			}
		},
		removeFromCart: (state, action) => {
			const title = action.payload.title;
            
            state.items = state.items.map((item) => {

                if (item.title === title) {
                    console.log("found");
                    
                    item.quantity -= 1;
                    state.totalBill -= item.price;
                }
                return item;
            }
            );
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

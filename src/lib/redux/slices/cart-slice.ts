import { createSlice, PayloadAction } from '@reduxjs/toolkit/react'
import { TCart } from '../../../types'
import { RootState } from '../store'

// Define a type for the slice state
export interface cartState {
    cart: TCart[]
}

// Define the initial state using that type
const initialState: cartState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // add to cart reducer
        addToCart: (state, action: PayloadAction<TCart>) => {
            const isProductExistInCart = state.cart.find((item) => item._id === action.payload._id)

            // is product already exist in cart then update quantity
            if (isProductExistInCart) {
                isProductExistInCart.quantity += action.payload.quantity
            }
            // else add to cart
            else {
                state.cart.push(action.payload)
            }
        },

        // remove cart reducer
        removeCart: (state, action: PayloadAction<{ id: string }>) => {
            const newCart = state.cart.filter(cart => cart._id !== action.payload.id)
            state.cart = [...newCart]
        },

        // remove all cart reducer
        removeAllCart: (state) => {
            state.cart = []
        }
    },
})

export const { addToCart, removeAllCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart

export default cartSlice.reducer
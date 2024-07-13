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
        addToCart: (state, action: PayloadAction<TCart>) => {
            state.cart.push(action.payload)
        },
        removeCart: (state, action: PayloadAction<{ id: string }>) => {
            const newCart = state.cart.filter(cart => cart._id !== action.payload.id)
            state.cart = [...newCart]
        },
        removeAllCart: (state) => {
            state.cart = []
        }
    },
})

export const { addToCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.produts.products

export default cartSlice.reducer
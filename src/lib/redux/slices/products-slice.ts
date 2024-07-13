import { createSlice, PayloadAction } from '@reduxjs/toolkit/react'
import { TCart } from '../../../types'
import { RootState } from '../store'

// Define a type for the slice state
export interface productState {
    products: TCart[]
}

// Define the initial state using that type
const initialState: productState = {
    products: [],
}

export const productsSlice = createSlice({
    name: 'produts',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<TCart>) => {
            state.products.push(action.payload)
        }
    },
})

export const { addProduct } = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.produts.products

export default productsSlice.reducer
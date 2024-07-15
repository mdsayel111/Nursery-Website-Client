import { createSlice, PayloadAction } from '@reduxjs/toolkit/react'
import { TProduct } from '../../../types'
import { RootState } from '../store'

// Define a type for the slice state
export interface productState {
    products: TProduct[]
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
        setProduct: (state, action: PayloadAction<TProduct[]>) => {
            state.products = action.payload
        },
        addProduct: (state, action: PayloadAction<TProduct>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            const newProducts = state.products.filter(product => product._id !== action.payload)
            state.products = newProducts
        }
    },
})

export const { addProduct, removeProduct, setProduct } = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.produts.products

export default productsSlice.reducer
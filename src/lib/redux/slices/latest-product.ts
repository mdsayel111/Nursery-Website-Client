import { createSlice, PayloadAction } from '@reduxjs/toolkit/react'
import { TProduct } from '../../../types'
import { RootState } from '../store'

// Define a type for the slice state
export interface TLatestProductState {
    latestProducts: TProduct[]
}

// Define the initial state using that type
const initialState: TLatestProductState = {
    latestProducts: [],
}

export const latestProductsSlice = createSlice({
    name: 'latest-produts',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setLatestProduct: (state, action: PayloadAction<TProduct[]>) => {
            state.latestProducts = action.payload
        },
        addLatestProduct: (state, action: PayloadAction<TProduct>) => {
            state.latestProducts.push(action.payload)
        },
        removeLatestProduct: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            const newProducts = state.latestProducts.filter(product => product._id !== action.payload)
            state.latestProducts = newProducts
        }
    },
})

export const { addLatestProduct, removeLatestProduct, setLatestProduct } = latestProductsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLatestProducts = (state: RootState) => state.latestProducts.latestProducts

export default latestProductsSlice.reducer
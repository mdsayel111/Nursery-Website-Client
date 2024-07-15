import { createSlice, PayloadAction } from '@reduxjs/toolkit/react'
import { TOrder } from '../../../types'
import { RootState } from '../store'

// Define a type for the slice state
export interface orderState {
    order: TOrder
}

// Define the initial state using that type
const initialState: orderState = {
    order: {} as TOrder,
}

export const OrderSlice = createSlice({
    name: 'order',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // add to order reducer
        addOrder: (state, action: PayloadAction<TOrder>) => {
            state.order = action.payload
        },

        // remove order reducer
        removeOrder: (state) => {
            state.order = {} as TOrder
        },
    },
})

export const { addOrder, removeOrder } = OrderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectOrder = (state: RootState) => state.order.order

export default OrderSlice.reducer
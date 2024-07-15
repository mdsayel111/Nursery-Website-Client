import { baseApi } from "./base-api";

// create products api
const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // add product api
        addOrder: builder.mutation({ query: (payload: any) => ({ url: "/orders", body: payload, method: "POST" }), invalidatesTags: ["products", "cartProducts"] }),
    })
})

export const { useAddOrderMutation } = orderApi



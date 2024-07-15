import { baseApi } from "./base-api";

// create products api
const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // get all products api
        createOrder: builder.query({ query: () => ({ url: "/products", method: "GET" }), providesTags: ["products"] }),

        // add product api
        addOrder: builder.mutation({ query: (payload: any) => ({ url: "/orders", body: payload, method: "POST" })}),
    })
})

export const { useAddOrderMutation } = orderApi



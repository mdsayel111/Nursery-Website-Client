import { TCart } from "../../../types";
import { baseApi } from "./base-api";

// create products api
const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // get all products api
        getAllproducts: builder.query({ query: () => ({ url: "/products", method: "GET" }) }),

        // get single product api
        getSingleProduct: builder.query({ query: (id: string) => ({ url: `/products/${id}`, method: "GET" }) }),

        // add product api
        addProduct: builder.mutation({ query: (payload: TCart) => ({ url: "/product", body: payload, method: "POST" }) }),

        // update product api
        updateProduct: builder.mutation({ query: (payload: Partial<TCart>) => ({ url: `/products/${payload._id}`, method: "PATCH", body: payload }) }),

        // delete product api
        deleteProduct: builder.mutation({ query: (id: string) => ({ url: `/products/${id}`, method: "DELETE" }) }),

        // lestest products api
        latestProducts: builder.query({ query: () => ({ url: "/products?sort=-createAt&limit=8", method: "GET" }) })
    })
})

export const { useAddProductMutation, useGetAllproductsQuery, useGetSingleProductQuery, useDeleteProductMutation, useUpdateProductMutation, useLatestProductsQuery } = productApi



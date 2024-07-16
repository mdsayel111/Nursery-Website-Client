import { TProduct } from "../../../types";
import { baseApi } from "./base-api";

// create products api
const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // get all products api
        getAllproducts: builder.query({ query: () => ({ url: "/products", method: "GET" }), providesTags: ["products"] }),

        // get all products by ids arr api
        getProductsByIdsArr: builder.query({ query: (idsArr: string[]) => ({ url: "/products/products-by-ids", method: "POST", body: idsArr }), providesTags: ["cartProducts"] }),

        getSearchProducts: builder.query({
            query: (query: string) => {
                console.log(query)
                return { url: `/products?${query}`, method: "GET" }
            },
            providesTags: ["products"]
        }),

        // get single product api
        getSingleProduct: builder.query({ query: (id: string) => ({ url: `/products/${id}`, method: "GET" }) }),

        // add product api
        addProduct: builder.mutation({ query: (payload: any) => ({ url: "/products", body: payload, method: "POST" }), invalidatesTags: ["products"] }),

        // update product api
        updateProduct: builder.mutation({ query: (payload: Partial<TProduct>) => ({ url: `/products/${payload._id}`, method: "PATCH", body: payload }), invalidatesTags: ["products"] }),

        // delete product api
        deleteProduct: builder.mutation({ query: (id: string) => ({ url: `/products/${id}`, method: "DELETE" }), invalidatesTags: ["products"] }),

        // lestest products api
        latestProducts: builder.query({ query: () => ({ url: "/products?sort=-createdAt&limit=8", method: "GET" }), providesTags: ["products"] })
    })
})

export const { useAddProductMutation, useGetAllproductsQuery, useGetSingleProductQuery, useDeleteProductMutation, useUpdateProductMutation, useLatestProductsQuery, useGetSearchProductsQuery, useGetProductsByIdsArrQuery } = productApi



import { PRODUCTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice.js";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: PRODUCTS_URL,
        params: {
          keyword,
          pageNumber,
        },
      }),
      providesTags: ["Products"], // so you dont have to refesh the page
      keepUnusedDataFor: 5,
    }),
    getProductsDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOADS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "DELETE",
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getTopProducts: builder.query({
      query: () => `${PRODUCTS_URL}/top`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productApiSlice;

// import { PRODUCTS_URL } from "../constants";
// import { apiSlice } from "./apiSlice";

// export const productsApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: ({ keyword, pageNumber }) => ({
//         url: PRODUCTS_URL,
//         params: { keyword, pageNumber },
//       }),
//       keepUnusedDataFor: 5,
//       providesTags: ["Products"],
//     }),
//     getProductsDetails: builder.query({
//       query: (productId) => ({
//         url: `${PRODUCTS_URL}/${productId}`,
//       }),
//       keepUnusedDataFor: 5,
//     }),
//     createProduct: builder.mutation({
//       query: () => ({
//         url: `${PRODUCTS_URL}`,
//         method: "POST",
//       }),
//       invalidatesTags: ["Product"],
//     }),
//     updateProduct: builder.mutation({
//       query: (data) => ({
//         url: `${PRODUCTS_URL}/${data.productId}`,
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["Products"],
//     }),
//     uploadProductImage: builder.mutation({
//       query: (data) => ({
//         url: `/api/upload`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     deleteProduct: builder.mutation({
//       query: (productId) => ({
//         url: `${PRODUCTS_URL}/${productId}`,
//         method: "DELETE",
//       }),
//       providesTags: ["Product"],
//     }),
//     createReview: builder.mutation({
//       query: (data) => ({
//         url: `${PRODUCTS_URL}/${data.productId}/reviews`,
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["Product"],
//     }),
//     getTopProducts: builder.query({
//       query: () => `${PRODUCTS_URL}/top`,
//       keepUnusedDataFor: 5,
//     }),
//   }),
// });

// export const {
//   useGetProductsQuery,
//   useGetProductsDetailsQuery,
//   useCreateProductMutation,
//   useUpdateProductMutation,
//   // useUploadProductImageMutation,
//   // useDeleteProductMutation,
//   // useCreateReviewMutation,
//   // useGetTopProductsQuery,
// } = productsApiSlice;

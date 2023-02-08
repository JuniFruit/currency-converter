import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    tagTypes: ['Pairs'],
    baseQuery: fetchBaseQuery({}),
    endpoints: () => ({}), 
})
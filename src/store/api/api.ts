import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	tagTypes: ['Pairs'],
	baseQuery: fetchBaseQuery({
		baseUrl: '',
		mode: 'cors',
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json')
			headers.set('apiKey', process.env.NEXT_PUBLIC_API_LAYER_KEY!)
			return headers
		}
	}),
	endpoints: () => ({})
})

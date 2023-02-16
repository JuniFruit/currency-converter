import { CURRENCY_BASE } from '@/api/api.urls'
import { api } from '@/store/api/api'
import { IConvertQuery, IConvertResult } from '@/types/currencyList.interface'

export const convertApi = api.injectEndpoints({
	endpoints: builder => ({
		convert: builder.mutation<IConvertResult, IConvertQuery>({
			query: query =>
				`${CURRENCY_BASE}/convert?to=${query.to}&from=${query.from}&amount=${query.amount}`
		})
	})
})

import { CURRENCY_BASE } from '@/api/api.urls'
import { ICurrencyItem } from '@/components/currency-select/CurrencySelect.interface'
import { api } from '@/store/api/api'
import { ISymbolResponse } from '@/types/currencyList.interface'
import { transformResponseToList } from '../utils/transformResponse'

export const currencyApi = api.injectEndpoints({
	endpoints: builder => ({
		getCurrencyPairs: builder.query<ICurrencyItem[], null>({
			query: () => `${CURRENCY_BASE}/symbols`,
			transformResponse: (response: ISymbolResponse) =>
				transformResponseToList(response),
			providesTags: ['Pairs']
		})
	})
})

import { CURRENCY_BASE } from '@/api/api.urls'
import { axiosRequest } from '@/api/axios.config'
import { ISymbolResponse } from '@/types/currencyList.interface'

export const CurrencyService = {
	async getCurrencyList() {
		const res = await axiosRequest.get<ISymbolResponse>(
			`${CURRENCY_BASE}/symbols`,
			{
				headers: { apiKey: `${process.env.NEXT_PUBLIC_API_LAYER_KEY}` }
			}
		)

		return res.data
	}
}

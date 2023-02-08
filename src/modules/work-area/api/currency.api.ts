import { CURRENCY_BASE, CURRENCY_KEY } from "@/api/api.urls"
import { api } from "@/store/api/api"
import { ICurrencyList } from "@/types/currencyList.interface"


const LIST = `?get=currency_list`

export const currencyApi = api.injectEndpoints({
    
    endpoints: (builder) => ({
        getCurrencyPairs: builder.query<ICurrencyList, null>({
            query: () => `${CURRENCY_BASE}${LIST}${CURRENCY_KEY}`,
            providesTags: []
        })

    })
})
import { FC } from 'react'
import { currencyApi } from './api/currency.api'

const WorkArea: FC = () => {
	const {} = currencyApi.useGetCurrencyPairsQuery(null, {})

	return <section></section>
}

export default WorkArea

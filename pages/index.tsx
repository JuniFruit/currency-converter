import Home, { IHome } from '@/pages/home/Home'
import { CurrencyService } from '@/service/currency.service'
import { transformResponseToList } from '@/utils/transformResponse'
import { NextPage } from 'next'

const HomePage: NextPage<IHome> = props => {
	return <Home currencyList={props.currencyList} />
}

export async function getStaticProps() {
	try {
		const rawList = await CurrencyService.getCurrencyList()

		return {
			props: {
				currencyList: transformResponseToList(rawList)
			}
		}
	} catch (error) {
		console.log(error)
		return {
			props: {
				currencyList: [
					{
						currency: 'USD'
					},
					{
						currency: 'EUR'
					}
				]
			}
		}
	}
}

export default HomePage

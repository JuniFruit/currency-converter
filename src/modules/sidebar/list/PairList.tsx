import { FC } from 'react'
import { IPairList } from './List.interface'
import { PairItem } from './PairItem'

const PairList: FC<IPairList> = ({ currencyData }) => {
	return (
		<>
			{currencyData.map((item, ind) => (
				<PairItem {...{ ...item }} key={ind} />
			))}
		</>
	)
}

export default PairList

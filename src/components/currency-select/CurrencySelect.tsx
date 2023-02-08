import { Option } from '@/ui/select/Option'
import { Select } from '@/ui/select/Select'
import { FC } from 'react'
import { ICurrencySelect } from './CurrencySelect.interface'

const CurrencySelect: FC<ICurrencySelect> = ({ data, ...rest }) => {
	return (
		<Select {...{ ...rest }}>
			{data.map(item => (
				<Option value={item.currency}>{item.currency}</Option>
			))}
		</Select>
	)
}

export default CurrencySelect

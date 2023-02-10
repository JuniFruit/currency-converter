import { Option } from '@/ui/select/Option'
import { Select } from '@/ui/select/Select'
import { FC } from 'react'
import { ICurrencySelect } from './CurrencySelect.interface'

const CurrencySelect: FC<ICurrencySelect> = ({
	data,
	defaultValue,
	...rest
}) => {
	if (!data) return null
	return (
		<Select {...{ ...rest }}>
			{data.map(item => (
				<Option
					value={item.currency}
					selected={defaultValue === item.currency}
					key={item.currency}
				>
					{item.currency}
				</Option>
			))}
		</Select>
	)
}

export default CurrencySelect

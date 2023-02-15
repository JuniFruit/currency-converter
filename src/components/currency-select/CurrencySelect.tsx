import { Option } from '@/ui/select/Option'
import { Select } from '@/ui/select/Select'
import { FC, useState } from 'react'
import { ICurrencySelect } from './CurrencySelect.interface'

const CurrencySelect: FC<ICurrencySelect> = ({
	data,
	defaultValue,
	...rest
}) => {
	if (!data) return null
	const [selected, setSelected] = useState(defaultValue)
	return (
		<>
			<Select>{selected}</Select>
			<ul>
				{data.map((item, ind) => (
					<Option
						value={item.currency}
						description={'Currency'}
						isSelected={selected === item.currency}
						key={ind + Math.random() * 100}
					/>
				))}
			</ul>
		</>
	)
}

export default CurrencySelect

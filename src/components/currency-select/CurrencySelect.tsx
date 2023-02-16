import { useClickOutside } from '@/hooks/useClickOutside'
import { Option } from '@/ui/select/Option'
import { OptionList } from '@/ui/select/OptionList'
import { Select } from '@/ui/select/Select'
import { FC, useState } from 'react'
import { ICurrencySelect } from './CurrencySelect.interface'

const CurrencySelect: FC<ICurrencySelect> = ({
	data,
	defaultValue,
	onSelect
}) => {
	if (!data) return null
	const [selected, setSelected] = useState(defaultValue)
	const { ref, isShow, setIsShow } = useClickOutside(false)

	const handleSelect = (value: string) => {
		setSelected(value)
		setIsShow(false)
		onSelect(value)
	}

	return (
		<div className='relative' ref={ref}>
			<Select
				onClick={() => setIsShow(!isShow)}
				aria-haspopup={true}
				aria-expanded={isShow}
				type='button'
			>
				{selected}
			</Select>
			{isShow ? (
				<OptionList>
					{data.map((item, ind) => (
						<Option
							value={item.currency}
							description={item.description}
							onSelect={handleSelect}
							isSelected={selected === item.currency}
							key={ind + Math.random() * 100}
						/>
					))}
				</OptionList>
			) : null}
		</div>
	)
}

export default CurrencySelect

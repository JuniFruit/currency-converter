import CurrencySelect from '@/components/currency-select/CurrencySelect'
import { Button } from '@/ui/buttons/main/Button'
import Field from '@/ui/fields/main/Field'
import { FC, ChangeEventHandler } from 'react'
import { IConvertBody } from './ConvertBody.interface'
import styles from './ConvertBody.module.scss'

const ConvertBody: FC<IConvertBody> = ({
	fromDefault,
	toDefault,
	selectOptions,
	onSelect,
	onConvert
}) => {
	const handleChangeFrom: ChangeEventHandler<HTMLSelectElement> = e => {
		onSelect(e.target.value, 'from')
	}
	const handleChangeTo: ChangeEventHandler<HTMLSelectElement> = e => {
		onSelect(e.target.value, 'to')
	}

	return (
		<div className={styles.body_container}>
			<div className={styles.input_container}>
				<h3>Enter amount: </h3>
				<Field type='number' min={0} />
			</div>
			<div className={styles.select_container}>
				<span>from</span>
				<CurrencySelect
					onChange={handleChangeFrom}
					{...{ ...selectOptions }}
					defaultValue={fromDefault}
					key={'from'}
				/>
				<span>to</span>
				<CurrencySelect
					onChange={handleChangeTo}
					{...{ ...selectOptions }}
					defaultValue={toDefault}
					key={'to'}
				/>
			</div>
			<div className={styles.button_container}>
				<Button onClick={() => onConvert()}>Convert</Button>
			</div>
		</div>
	)
}

export default ConvertBody

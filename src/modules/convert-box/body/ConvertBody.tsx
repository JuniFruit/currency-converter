import CurrencySelect from '@/components/currency-select/CurrencySelect'
import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { Button } from '@/ui/buttons/main/Button'
import Field from '@/ui/fields/main/Field'
import { FC, FormEventHandler, useRef } from 'react'
import { IoRepeat } from 'react-icons/io5'
import { IConvertBody } from './ConvertBody.interface'
import styles from './ConvertBody.module.scss'

const ConvertBody: FC<IConvertBody> = ({
	fromDefault,
	toDefault,
	selectOptions,
	onSelect,
	onConvert,
	onSwap,
	isProcessing,
	result
}) => {
	const amount = useRef<HTMLInputElement | null>(null)
	const handleChangeFrom = (value: string) => {
		onSelect(value, 'from')
	}
	const handleChangeTo = (value: string) => {
		onSelect(value, 'to')
	}
	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		if (!amount.current) return
		onConvert(amount.current.value)
	}

	return (
		<form className={styles.body_container} onSubmit={handleSubmit}>
			<div className={styles.input_container}>
				<h3>Enter amount: </h3>
				<Field
					type='number'
					min={0}
					step='any'
					name='amount'
					required
					aria-required={true}
					ref={amount}
				/>
			</div>
			<div className={styles.select_container}>
				<CurrencySelect
					onSelect={handleChangeFrom}
					data={selectOptions.data}
					defaultValue={fromDefault}
					key={'from'}
				/>
				<IconBtn type='button' onClick={() => onSwap()}>
					<IoRepeat />
				</IconBtn>
				<CurrencySelect
					onSelect={handleChangeTo}
					data={selectOptions.data}
					defaultValue={toDefault}
					key={'to'}
				/>
			</div>
			<div className={styles.result_container}>
				{result ? (
					<>
						<p>rate: {result.info.rate.toFixed(5)}</p>
						<span>result: {result.result.toFixed(4)}</span>
					</>
				) : null}
			</div>
			<div className={styles.button_container}>
				<Button type='submit' role='button' isLoading={isProcessing}>
					Convert
				</Button>
			</div>
		</form>
	)
}

export default ConvertBody

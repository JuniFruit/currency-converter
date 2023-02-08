import { FC } from 'react'
import ConvertBody from './body/ConvertBody'
import { IConvertBox } from './ConvertBox.interface'
import styles from './ConvertBox.module.scss'
import ConvertHeader from './header/ConvertHeader'

const ConvertBox: FC<IConvertBox> = ({ title, ...rest }) => {
	return (
		<div className={styles.box_container}>
			<ConvertHeader title={title} />
			<ConvertBody {...{ ...rest }} />
		</div>
	)
}

export default ConvertBox

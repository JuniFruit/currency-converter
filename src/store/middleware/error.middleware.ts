import {
	isRejectedWithValue,
	Middleware,
	MiddlewareAPI
} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import messmessageActions from '../message/message.slice'

const { addMsg } = messmessageActions

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			if (action.payload.data)
				api.dispatch(
					addMsg({
						message: action.payload.data.error.message,
						status: 500
					})
				)
		}

		return next(action)
	}

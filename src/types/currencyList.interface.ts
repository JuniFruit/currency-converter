interface SymbolItem {
	KEY: string
}

export interface ISymbolResponse {
	symbols: SymbolItem
}

export interface IConvertResult {
	info: {
		rate: number
	}
	query: IConvertQuery
	result: number
}

export interface IConvertQuery {
	amount: number
	from: string
	to: string
}

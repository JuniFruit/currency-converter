export interface IDataItem {
	fromDefault: string
	toDefault: string
	id: number
}

export const dummyData: any[] = [
	{
		title: 'RUR to TRY',
		fromDefault: 'USD',
		toDefault: 'RUR',
		id: 1
	},
	{
		title: 'RUR to USD',
		fromDefault: 'YEN',
		toDefault: 'RUR',
		id: 2
	},
	{
		title: 'RUR to YEN',
		fromDefault: 'RUR',
		toDefault: 'USD',
		id: 3
	}
]

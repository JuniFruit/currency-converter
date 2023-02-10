import { IConvertBox } from "../convert-box/ConvertBox.interface";

export interface IDataItem extends Omit<IConvertBox, "onConvert" | "selectOptions" | "onClose"> { }


export const dummyData: IDataItem[] = [
    {
        title: 'RUR to TRY',
        fromDefault: "USD",
        toDefault: "RUR",
        id: 1
    },
    {
        title: 'RUR to USD',
        fromDefault: 'YEN',
        toDefault: "RUR",
        id: 2
    },
    {
        title: 'RUR to YEN',
        fromDefault: "RUR",
        toDefault: "USD",
        id: 3
    },
]
import { ICurrencyItem } from "@/components/currency-select/CurrencySelect.interface";

export interface ICurrencyList {
    status:string;
    message: string;
    data: ICurrencyItem[]
}
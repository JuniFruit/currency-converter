import { ISelect } from "@/ui/select/Select.interface";

export interface ICurrencySelect extends ISelect {
    data: ICurrencyItem[];
}

export interface ICurrencyItem {
    currency: string;
}
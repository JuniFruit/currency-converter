import { ISelect } from "@/ui/select/Select.interface";

export interface ICurrencySelect extends ISelect {
    data: ICurrencyItem[];
    defaultValue?: string;
}

export interface ICurrencyItem {
    currency: string;
}
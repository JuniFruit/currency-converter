import { ICurrencySelect } from "@/components/currency-select/CurrencySelect.interface";

export interface IConvertBody {
    from: ICurrencySelect;
    to: ICurrencySelect;
    onConvert: () => void;
}
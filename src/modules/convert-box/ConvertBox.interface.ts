import { IConvertBody } from "./body/ConvertBody.interface";



export interface IConvertBox extends IConvertBody {
    title:string;
    id: number;
    onClose: (id: number) => void;
}
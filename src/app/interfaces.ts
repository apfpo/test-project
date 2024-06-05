import { ITEM } from "../shared/consts";

export interface Show {
    show(data: ITEM): string;
}
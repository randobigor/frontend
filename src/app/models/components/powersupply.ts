import { Image } from "../image";

export interface Powersupply {
    id?: number,
    vendor?: string,
    model?: string,
    power?: number,
    certificate?: number,
    image?: Image,
    price?: number
}

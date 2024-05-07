import { Image } from "../image";

export interface Cooler {
    id?: number,
    vendor?: string,
    model?: string,
    type?: string,
    image?: Image,
    price?: number
}

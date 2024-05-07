import { Image } from "../image";

export interface Memory {
    id?: number,
    vendor?: string,
    model?: string,
    type?: string,
    capacity?: number,
    freq?: number,
    image?: Image,
    price?: number
}

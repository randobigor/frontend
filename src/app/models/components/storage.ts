import { Image } from "../image";

export interface Storage {
    id?: number,
    vendor?: string,
    model?: string,
    type?: string,
    capacity?: number,
    image?: Image,
    price?: number
}

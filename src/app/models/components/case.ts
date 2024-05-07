import { Image } from "../image";

export interface Case {
    id?: number,
    vendor?: string,
    model?: string,
    formFactor?: string,
    image?: Image,
    price?: number
}

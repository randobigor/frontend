import { Image } from "../image";

export interface Gpu {
    id?: number,
    vendor?: string,
    model?: string,
    memoryType?: string,
    memory?: number,
    image?: Image,
    price?: number
}

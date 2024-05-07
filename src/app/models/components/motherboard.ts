import { Image } from "../image";

export interface Motherboard {
    id?: number,
    vendor?: string,
    model?: string,
    socket?: string,
    chipset?: string,
    ramType?: string,
    ramSticks?: number,
    image?: Image,
    price?: number
}

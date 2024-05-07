import { Image } from "../image";

export interface Cpu {
    id?: number,
    vendor?: string,
    socket?: string,
    model?: string,
    cores?: number,
    threads?: number,
    freq?: number,
    image?: Image,
    price?: number
}

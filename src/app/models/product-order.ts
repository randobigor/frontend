import { Product } from "./product";

export interface ProductOrder {
    id?: number,
    product?: Product,
    contactName?: string,
    contactNumber?: string,
    contactEmail?: string,
    createdTm?: string
}
import { AdditionalCost } from "./additionalcost";
import { Category } from "./category";
import { Image } from "./image";

export interface Product {
    id?: number,
    category?: Category,
    categoryId: number,
    name?: string,
    description?: string,
    stockAvailability?: string,
    condition?: string,
    price: number,
    soldPrice?: number,
    additionalCosts?: AdditionalCost[],
    images?: Image[],
}

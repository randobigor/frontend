import { Build } from "./build";

export interface BuildOrder {
    id?: number,
    build?: Build,
    contactName?: string,
    contactNumber?: string,
    contactEmail?: string,
    createdTm?: string
}
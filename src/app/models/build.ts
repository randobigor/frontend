import { AdditionalCost } from "./additionalcost";
import { Image } from "./image";
import { Product } from "./product";

export interface Build {
    id?: number,
    name?: string,
    components: Product[],
    description?: string,
    available?: boolean,
    stockAvailability?: string,
    condition?: string,
    price: number,
    showPrice: number,
    soldPrice?: number,
    additionalCosts?: AdditionalCost[],
    images?: Image[],

    buildPurpose?: string,

    motherBoardName?: string,
    motherBoardChipset?: string,
    motherBoardSocket?: string,

    cpuVendor?: string,
    cpuModel?: string,
    cpuCores?: number,
    cpuThreads?: number,
    cpuFreq?: number,

    coolerType?: string,
    coolerName?: string,

    ramModel?: string,
    ramType?: string,
    ramFreq?: number,
    ramSize?: number,
    ramStickNumber?: number,

    romSsdName?: string,
    romSsdCapacity?: number,
    romHddName?: string,
    romHddCapacity?: number,

    gpuVendor?: string,
    gpuModel?: string,
    gpuCapacity?: number,
    gpuMemoryType?: string,

    psuName?: string,
    psuModel?: string,
    psuPower?: number,
    psuCertificate?: string,

    caseName?: string,
    caseModel?: string,
    caseFormFactor?: string,
}

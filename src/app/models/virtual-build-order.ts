import { Case } from "./components/case"
import { Cooler } from "./components/cooler"
import { Cpu } from "./components/cpu"
import { Gpu } from "./components/gpu"
import { Memory } from "./components/memory"
import { Motherboard } from "./components/motherboard"
import { Powersupply } from "./components/powersupply"
import { Storage } from "./components/storage"

export interface VirtualBuildOrder {
    id?: number,
    cpu?: Cpu,
    cooler?: Cooler,
    motherboard?: Motherboard,
    memory?: Memory,
    storage?: Storage,
    gpu?: Gpu,
    psu?: Powersupply,
    pcCase?: Case,
    contactName?: string,
    contactNumber?: string,
    contactEmail?: string,
    createdTm?: string
}
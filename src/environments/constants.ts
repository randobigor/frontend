export const constants = {
    buildPurposes: [
        { name: 'Игровой', value: 'GAMING' },
        { name: 'Офисный', value: 'OFFICE' }
    ],

    cpuVendors: [
        { name: 'AMD', value: 'AMD' },
        { name: 'Intel', value: 'Intel' }
    ],

    cpuCores: [
        { name: '2', value: 2 },
        { name: '4', value: 4 },
        { name: '6', value: 6 },
        { name: '8', value: 8 }
    ],

    cpuThreads: [
        { name: '2', value: 2 },
        { name: '4', value: 4 },
        { name: '8', value: 8 },
        { name: '12', value: 12 },
        { name: '16', value: 16 }
    ],

    cpuCoolerTypes: [
        { name: 'Воздушное', value: 'AIR' },
        { name: 'Водяное (неосблуживаемое)', value: 'AIO' },
        { name: 'Водяное (кастомное)', value: 'WATER_CUSTOM' }
    ],

    ramTypes: [
        { name: 'DDR3', value: 'DDR3' },
        { name: 'DDR4', value: 'DDR4' },
        { name: 'DDR5', value: 'DDR5' }
    ],

    motherboardRamSticks: [
        { name: '2', value: 2 },
        { name: '4', value: 4 },
        { name: '6', value: 6 }
    ],

    ramNumber: [
        { name: '1', value: 1 },
        { name: '2', value: 2 },
        { name: '3', value: 3 },
        { name: '4', value: 4 },
        { name: '5', value: 5 },
        { name: '6', value: 6 }
    ],

    ramCapacity: [
        { name: '4', value: 4 },
        { name: '8', value: 8 },
        { name: '16', value: 16 },
        { name: '32', value: 32 },
        { name: '64', value: 64 }
    ],

    gpuChipsetVendors: [
        { name: 'AMD', value: 'AMD' },
        { name: 'Nvidia', value: 'Nvidia' }
    ],

    gpuMemoryTypes: [
        { name: 'GDDR5', value: 'GDDR5' },
        { name: 'GDDR6', value: 'GDDR6' },
        { name: 'GDDR6X', value: 'GDDR6X' }
    ],

    gpuMemoryCapacity: [
        { name: '1 GB', value: '1' },
        { name: '2 GB', value: '2' },
        { name: '3 GB', value: '3' },
        { name: '4 GB', value: '4' },
        { name: '6 GB', value: '6' },
        { name: '8 GB', value: '8' },
        { name: '12 GB', value: '12' },
        { name: '16 GB', value: '16' }
    ],

    powerSupplyCertificates: [
        { name: 'Нет', value: 'WO' },
        { name: '80+', value: '80P' },
        { name: '80+ Bronze', value: '80PB' },
        { name: '80+ Gold', value: '80PG' },
        { name: '80+ Platinum', value: '80PP' },
        { name: '80+ Titanium', value: '80PT' },
    ],

    caseFormFactors: [
        { name: 'Mini Tower', value: 'MINT' },
        { name: 'Middle Tower', value: 'MIDT' },
        { name: 'Full Tower', value: 'FULT' }
    ],

    stockAvailabilities: [
        { name: 'STOCK_WAREHOUSE', label: 'На складе' },
        { name: 'STOCK_PROVIDER', label: 'У поставщика' },
        { name: 'OUT_OF_STOCK', label: 'Нет в наличии' }
    ],

    conditions: [
        { name: 'NEW', label: 'Новый' },
        { name: 'SECOND_HAND', label: 'Б/У' }
    ],

    storageTypes: [
        { name: 'SSD', value: 'SSD' },
        { name: 'HDD', value: 'HDD' },
        { name: 'M2. SSD', value: 'M2SSD' },
        { name: 'M2. NVME', value: 'M2NVME' },
    ],
}
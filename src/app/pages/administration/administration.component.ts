import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Build } from '../../models/build';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';
import { UtilsService } from '../../services/utils.service';
import { Product } from '../../models/product';
import { HttpParams } from '@angular/common/http';
import { CpuCreateEditComponent } from '../configurator/components/cpu-create-edit/cpu-create-edit.component';
import { Cpu } from '../../models/components/cpu';
import { MessageService } from 'primeng/api';
import { Case } from '../../models/components/case';
import { CaseCreateEditComponent } from '../configurator/components/case-create-edit/case-create-edit.component';
import { CoolerCreateEditComponent } from '../configurator/components/cooler-create-edit/cooler-create-edit.component';
import { MotherboardCreateEditComponent } from '../configurator/components/motherboard-create-edit/motherboard-create-edit.component';
import { MemoryCreateEditComponent } from '../configurator/components/memory-create-edit/memory-create-edit.component';
import { StorageCreateEditComponent } from '../configurator/components/storage-create-edit/storage-create-edit.component';
import { GpuCreateEditComponent } from '../configurator/components/gpu-create-edit/gpu-create-edit.component';
import { PsuCreateEditComponent } from '../configurator/components/psu-create-edit/psu-create-edit.component';
import { Cooler } from '../../models/components/cooler';
import { Motherboard } from '../../models/components/motherboard';
import { Memory } from '../../models/components/memory';
import { Storage } from '../../models/components/storage';
import { Gpu } from '../../models/components/gpu';
import { Powersupply } from '../../models/components/powersupply';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss',
  providers: [MessageService]
})
export class AdministrationComponent implements OnInit {

  //Child components
  @ViewChild(CpuCreateEditComponent) cpuCreateEditComponent: any;
  @ViewChild(CoolerCreateEditComponent) coolerCreateEditComponent: any;
  @ViewChild(MotherboardCreateEditComponent) motherboardCreateEditComponent: any;
  @ViewChild(MemoryCreateEditComponent) memoryCreateEditComponent: any;
  @ViewChild(StorageCreateEditComponent) storageCreateEditComponent: any;
  @ViewChild(GpuCreateEditComponent) gpuCreateEditComponent: any;
  @ViewChild(PsuCreateEditComponent) psuCreateEditComponent: any;
  @ViewChild(CaseCreateEditComponent) caseCreateEditComponent: any;

  // @ViewChild()
  builds: Build[] = [];
  tempBuildId: number | undefined = 0;
  buildSoldPrice: number = 0;
  buildDialogVisible: boolean = false;

  products: Product[] = [];
  tempProduct: Product = <Product>{};
  productSoldPrice: number = 0;
  productDialogVisible: boolean = false;

  cpus: Cpu[] = [];
  tempCpu: Cpu = <Cpu>{};
  cpuAddDialogVisible: boolean = false;

  coolers: Cooler[] = [];
  tempCooler: Cooler = <Cooler>{};
  coolerAddDialogVisible: boolean = false;

  motherboards: Motherboard[] = [];
  tempMotherboard: Motherboard = <Motherboard>{};
  motherboardAddDialogVisible: boolean = false;

  memories: Memory[] = [];
  tempMemory: Memory = <Memory>{};
  memoryAddDialogVisible: boolean = false;

  storages: Storage[] = [];
  tempStorage: Storage = <Storage>{};
  storageAddDialogVisible: boolean = false;

  gpus: Gpu[] = [];
  tempGpu: Gpu = <Gpu>{};
  gpuAddDialogVisible: boolean = false;

  psus: Powersupply[] = [];
  tempPsu: Powersupply = <Powersupply>{};
  psuAddDialogVisible: boolean = false;

  cases: Case[] = [];
  tempCase: Case = <Case>{};
  caseAddDialogVisible: boolean = false;

  constructor(
    private httpService: HttpService,
    public utils: UtilsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initBuilds();
    this.initProducts();

    this.initCpus();
    this.initCoolers();
    this.initMotherBoards();
    this.initMemories();
    this.initStorages();
    this.initGpus();
    this.initPsus();
    this.initCases();
  }

  initBuilds() {
    this.httpService.getData(environment.BUILDS).subscribe((response: Build[]) => this.builds = response);
  }

  initProducts() {
    this.httpService.getData(environment.PRODUCTS).subscribe((response: Product[]) => this.products = response);
  }

  initCpus() {
    this.httpService.getData(environment.CPU).subscribe((response: Cpu[]) => this.cpus = response);
  }

  initCoolers() {
    this.httpService.getData(environment.COOLER).subscribe((response: Cooler[]) => this.coolers = response);
  }

  initMotherBoards() {
    this.httpService.getData(environment.MOTHERBOARD).subscribe((response: Motherboard[]) => this.motherboards = response);
  }

  initMemories() {
    this.httpService.getData(environment.MEMORY).subscribe((response: Memory[]) => this.memories = response);
  }

  initStorages() {
    this.httpService.getData(environment.STORAGE).subscribe((response: Storage[]) => this.storages = response);
  }

  initGpus() {
    this.httpService.getData(environment.GPU).subscribe((response: Gpu[]) => this.gpus = response);
  }

  initPsus() {
    this.httpService.getData(environment.PSU).subscribe((response: Powersupply[]) => this.psus = response);
  }

  initCases() {
    this.httpService.getData(environment.CASE).subscribe((response: Case[]) => this.cases = response);
  }

  getSoldPrice(entity: Build | Product): boolean {
    if (entity.soldPrice) {
      return entity.soldPrice > 0;
    }
    return false;
  }

  sellPcBuild() {
    let buildId = this.tempBuildId ? this.tempBuildId : 0;

    this.httpService.sellPcBuild(buildId, this.buildSoldPrice).subscribe(() => {
      this.tempBuildId = 0;
      this.buildSoldPrice = 0;
      this.buildDialogVisible = false;
    })
  }

  sellProduct() {

  }

  //#region component submits

  submitCpu(cpu: Cpu) {
    this.cpuAddDialogVisible = false;
    this.httpService.createData(environment.CPU, cpu).subscribe(() => {
      let detail = cpu.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initCpus();
    })
  }

  submitCooler(cooler: Cooler) {
    this.coolerAddDialogVisible = false;
    this.httpService.createData(environment.COOLER, cooler).subscribe(() => {
      let detail = cooler.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initCoolers();
    })
  }

  submitMotherboard(motherboard: Motherboard) {
    this.motherboardAddDialogVisible = false;
    this.httpService.createData(environment.MOTHERBOARD, motherboard).subscribe(() => {
      let detail = motherboard.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initMotherBoards();
    })
  }

  submitMemory(memory: Memory) {
    this.memoryAddDialogVisible = false;
    this.httpService.createData(environment.MEMORY, memory).subscribe(() => {
      let detail = memory.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initMemories();
    })
  }

  submitStorage(storage: Storage) {
    console.log(storage)
    this.storageAddDialogVisible = false;
    this.httpService.createData(environment.STORAGE, storage).subscribe(() => {
      let detail = storage.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initStorages();
    })
  }

  submitGpu(gpu: Gpu) {
    this.gpuAddDialogVisible = false;
    this.httpService.createData(environment.GPU, gpu).subscribe(() => {
      let detail = gpu.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initGpus();
    })
  }

  submitPsu(psu: Powersupply) {
    this.psuAddDialogVisible = false;
    this.httpService.createData(environment.PSU, psu).subscribe(() => {
      let detail = psu.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initPsus();
    })
  }

  submitCase(caseBody: Case) {
    this.caseAddDialogVisible = false;
    this.httpService.createData(environment.CASE, caseBody).subscribe(() => {
      let detail = caseBody.id ? 'Обновлено успешно' : 'Добавлено успешно'
      this.messageService.add({ severity: 'success', detail: detail });
      this.initCases();
    })
  }
  //#endregion
}

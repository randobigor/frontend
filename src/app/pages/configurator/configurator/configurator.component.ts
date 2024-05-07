import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Case } from '../../../models/components/case';
import { Cooler } from '../../../models/components/cooler';
import { Cpu } from '../../../models/components/cpu';
import { Gpu } from '../../../models/components/gpu';
import { Memory } from '../../../models/components/memory';
import { Motherboard } from '../../../models/components/motherboard';
import { Powersupply } from '../../../models/components/powersupply';
import { Storage } from '../../../models/components/storage';
import { CpuSelectListComponent } from '../components/cpu-select-list/cpu-select-list.component';
import { MotherboardSelectListComponent } from '../components/motherboard-select-list/motherboard-select-list.component';
import { RamSelectListComponent } from '../components/ram-select-list/ram-select-list.component';
import { Contact } from '../../../models/contact';
import { VirtualBuildOrder } from '../../../models/virtual-build-order';
import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss',
  providers: [MessageService]
})
export class ConfiguratorComponent implements OnInit {

  @ViewChild(CpuSelectListComponent) cpuSelectListComponent: any;
  @ViewChild(RamSelectListComponent) ramSelectListComponent: any;
  @ViewChild(MotherboardSelectListComponent) motherboardSelectListComponent: any;

  cpuSelectDialogVisible: boolean = false;
  coolerSelectDialogVisible: boolean = false;
  motherboardDialogVisible: boolean = false;
  ramDialogVisible: boolean = false;
  romDialogVisible: boolean = false;
  gpuDialogVisible: boolean = false;
  psuDialogVisible: boolean = false;
  caseDialogVisible: boolean = false;
  contactFormVisible: boolean = false;

  socket: string | undefined;
  ramType: string | undefined;

  selectedCpu: Cpu = <Cpu>{};
  selectedCooler: Cooler = <Cooler>{};
  selectedMotherboard: Motherboard = <Motherboard>{};
  selectedMemory: Memory = <Memory>{};
  selectedStorage: Storage = <Storage>{};
  selectedGpu: Gpu = <Gpu>{};
  selectedPsu: Powersupply = <Powersupply>{};
  selectedCase: Case = <Case>{};
  totalPrice: number = 0;

  values: any = [];

  constructor(public messageService: MessageService, private httpService: HttpService) {
    this.initializeValues();
  }

  ngOnInit(): void {
  }

  initializeValues() {
    this.values = [
      { component: 'Процессор', descriminator: 'CPU', data: this.selectedCpu },
      { component: 'Кулер', descriminator: 'COOLER', data: this.selectedCooler },
      { component: 'Материнская плата', descriminator: 'MB', data: this.selectedMotherboard },
      { component: 'Оперативная память', descriminator: 'RAM', data: this.selectedMemory },
      { component: 'Память', descriminator: 'ROM', data: this.selectedStorage },
      { component: 'Видеокарта', descriminator: 'GPU', data: this.selectedGpu },
      { component: 'Блок питания', descriminator: 'PSU', data: this.selectedPsu },
      { component: 'Корпус', descriminator: 'CASE', data: this.selectedCase }
    ]
  };

  selectComponent(product: any) {
    switch (product.descriminator) {
      case 'CPU':
        if (this.socket) {
          this.cpuSelectListComponent.loadCpusWithFilter(this.socket);
        } else {
          this.cpuSelectListComponent.loadAllCpus();
        }
        this.cpuSelectDialogVisible = true;
        break;
      case 'COOLER': this.coolerSelectDialogVisible = true; break;
      case 'MB':

        if (this.socket && this.ramType) {
          this.motherboardSelectListComponent.findBySocketAndRamType(this.socket, this.ramType);
        }

        if (this.socket) {
          this.motherboardSelectListComponent.findBySocket(this.socket);
        } else if (this.ramType) {
          this.motherboardSelectListComponent.findByRamType(this.ramType);
        } else {
          this.motherboardSelectListComponent.findAll();
        }

        this.motherboardDialogVisible = true;
        break;
      case 'RAM':
        if (this.ramType) {
          this.ramSelectListComponent.findAllByRamType(this.ramType);
        } else {
          this.ramSelectListComponent.findAll();
        }
        this.ramDialogVisible = true;
        break;
      case 'ROM': this.romDialogVisible = true; break;
      case 'GPU': this.gpuDialogVisible = true; break;
      case 'PSU': this.psuDialogVisible = true; break;
      case 'CASE': this.caseDialogVisible = true; break;
    }
  }

  resetComponent(product: any) {
    switch (product.descriminator) {
      case 'CPU': Object.keys(this.selectedCpu).forEach(key => this.selectedCpu[key as keyof Cpu] = undefined); this.socket = undefined; this.calculateTotalPrice(); break;
      case 'COOLER': Object.keys(this.selectedCooler).forEach(key => this.selectedCooler[key as keyof Cooler] = undefined); break;
      case 'MB': Object.keys(this.selectedMotherboard).forEach(key => this.selectedMotherboard[key as keyof Motherboard] = undefined); this.socket = undefined; this.ramType = undefined; this.calculateTotalPrice(); break;
      case 'RAM': Object.keys(this.selectedMemory).forEach(key => this.selectedMemory[key as keyof Memory] = undefined); this.ramType = undefined; this.calculateTotalPrice(); break;
      case 'ROM': Object.keys(this.selectedStorage).forEach(key => this.selectedStorage[key as keyof Storage] = undefined); this.calculateTotalPrice(); break;
      case 'GPU': Object.keys(this.selectedGpu).forEach(key => this.selectedGpu[key as keyof Gpu] = undefined); this.calculateTotalPrice(); break;
      case 'PSU': Object.keys(this.selectedPsu).forEach(key => this.selectedPsu[key as keyof Powersupply] = undefined); this.calculateTotalPrice(); break;
      case 'CASE': Object.keys(this.selectedCase).forEach(key => this.selectedCase[key as keyof Case] = undefined); this.calculateTotalPrice(); break;
    }
  }

  resetAll() {
    Object.keys(this.selectedCpu).forEach(key => this.selectedCpu[key as keyof Cpu] = undefined); this.socket = undefined;
    Object.keys(this.selectedCooler).forEach(key => this.selectedCooler[key as keyof Cooler] = undefined);
    Object.keys(this.selectedMotherboard).forEach(key => this.selectedMotherboard[key as keyof Motherboard] = undefined);
    Object.keys(this.selectedMemory).forEach(key => this.selectedMemory[key as keyof Memory] = undefined); this.ramType = undefined;
    Object.keys(this.selectedStorage).forEach(key => this.selectedStorage[key as keyof Storage] = undefined);
    Object.keys(this.selectedGpu).forEach(key => this.selectedGpu[key as keyof Gpu] = undefined);
    Object.keys(this.selectedPsu).forEach(key => this.selectedPsu[key as keyof Powersupply] = undefined);
    Object.keys(this.selectedCase).forEach(key => this.selectedCase[key as keyof Case] = undefined);
    this.calculateTotalPrice();
  }

  selectCpu(cpu: Cpu) {
    Object.keys(cpu).forEach(key => this.selectedCpu[key as keyof Cpu] = cpu[key as keyof Cpu] as any);

    this.cpuSelectDialogVisible = false;
    this.socket = cpu.socket;
    this.calculateTotalPrice();
  }

  selectCooler(cooler: Cooler) {
    Object.keys(cooler).forEach(key => this.selectedCooler[key as keyof Cooler] = cooler[key as keyof Cooler] as any);
    this.coolerSelectDialogVisible = false;
    this.calculateTotalPrice();
  }

  selectMotherboard(motherboard: Motherboard) {
    Object.keys(motherboard).forEach(key => this.selectedMotherboard[key as keyof Motherboard] = motherboard[key as keyof Motherboard] as any);

    this.motherboardDialogVisible = false;
    this.socket = motherboard.socket;
    this.ramType = motherboard.ramType;
    this.calculateTotalPrice();
  }

  selectMemory(memory: Memory) {
    Object.keys(memory).forEach(key => this.selectedMemory[key as keyof Memory] = memory[key as keyof Memory] as any);

    this.ramDialogVisible = false;
    this.ramType = memory.type;
    console.log(this.ramType)
    this.calculateTotalPrice();
  }

  selectStorage(storage: Storage) {
    Object.keys(storage).forEach(key => this.selectedStorage[key as keyof Storage] = storage[key as keyof Storage] as any);
    this.romDialogVisible = false;
    this.calculateTotalPrice();
  }

  selectGpu(gpu: Gpu) {
    Object.keys(gpu).forEach(key => this.selectedGpu[key as keyof Gpu] = gpu[key as keyof Gpu] as any);
    this.gpuDialogVisible = false;
    this.calculateTotalPrice();
  }

  selectPsu(psu: Powersupply) {
    Object.keys(psu).forEach(key => this.selectedPsu[key as keyof Powersupply] = psu[key as keyof Powersupply] as any);
    this.psuDialogVisible = false;
    this.calculateTotalPrice();
  }

  selectCase(caseValue: Case) {
    Object.keys(caseValue).forEach(key => this.selectedCase[key as keyof Case] = caseValue[key as keyof Case] as any);
    this.caseDialogVisible = false;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice =
      this.getComponentPrice(this.selectedCpu) +
      this.getComponentPrice(this.selectedCooler) +
      this.getComponentPrice(this.selectedMotherboard) +
      this.getComponentPrice(this.selectedMemory) +
      this.getComponentPrice(this.selectedStorage) +
      this.getComponentPrice(this.selectedGpu) +
      this.getComponentPrice(this.selectedPsu) +
      this.getComponentPrice(this.selectedCase) +
      this.getComponentPrice(this.totalPrice);
  }

  getComponentPrice(component: any) {
    if (component.price) {
      return component.price;
    } else {
      return 0;
    }
  }

  placeOrder(contact: Contact) {
    let virtualBuildOrder = <VirtualBuildOrder>{};

    virtualBuildOrder.cpu = <Cpu>{};
    virtualBuildOrder.cpu.id = this.selectedCpu.id;
    virtualBuildOrder.cooler = <Cooler>{};
    virtualBuildOrder.cooler.id = this.selectedCooler.id;
    virtualBuildOrder.motherboard = <Motherboard>{};
    virtualBuildOrder.motherboard.id = this.selectedMotherboard.id;
    virtualBuildOrder.memory = <Memory>{};
    virtualBuildOrder.memory.id = this.selectedMemory.id;
    virtualBuildOrder.storage = <Storage>{};
    virtualBuildOrder.storage.id = this.selectedStorage.id;
    virtualBuildOrder.gpu = <Gpu>{};
    virtualBuildOrder.gpu.id = this.selectedGpu.id;
    virtualBuildOrder.psu = <Powersupply>{};
    virtualBuildOrder.psu.id = this.selectedPsu.id;
    virtualBuildOrder.pcCase = <Case>{};
    virtualBuildOrder.pcCase.id = this.selectedCase.id;


    virtualBuildOrder.contactName = contact.contactName;
    virtualBuildOrder.contactEmail = contact.contactEmail;
    virtualBuildOrder.contactNumber = contact.contactNumber;

    this.httpService.createData(environment.VIRTUAL_BUILD_ORDER, virtualBuildOrder).subscribe(() => {
      this.contactFormVisible = false;
      this.messageService.add({ severity: 'success', detail: 'Заказ успешно оформлен!' });
    })
  }
}

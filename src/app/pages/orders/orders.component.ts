import { Component, ViewChild } from '@angular/core';
import { ProductOrder } from '../../models/product-order';
import { BuildOrder } from '../../models/build-order';
import { VirtualBuildOrder } from '../../models/virtual-build-order';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';
import { UtilsService } from '../../services/utils.service';
import { Contact } from '../../models/contact';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { env } from 'process';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class OrdersComponent {

  buildId: number = 0;
  orderBuildId: number = 0;
  buildSoldPrice: number = 0;
  buildDialogVisible: boolean = false;

  @ViewChild(ContactFormComponent) contactFormComponent: any;

  contactFormVisible: boolean = false;
  tempContact: Contact = {};

  productOrders: ProductOrder[] = [];
  buildOrders: BuildOrder[] = [];
  virtualBuildOrders: VirtualBuildOrder[] = [];

  constructor(private httpService: HttpService, public utils: UtilsService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.initProductOrders();
    this.initBuildOrders();
    this.initVirtualBuildOrders();
  }

  initProductOrders() {
    this.httpService.getData(environment.PRODUCT_ORDER).subscribe((response: ProductOrder[]) => this.productOrders = response);
  }

  initBuildOrders() {
    this.httpService.getData(environment.BUILD_ORDER).subscribe((response: BuildOrder[]) => this.buildOrders = response);
  }

  initVirtualBuildOrders() {
    this.httpService.getData(environment.VIRTUAL_BUILD_ORDER).subscribe((response: VirtualBuildOrder[]) => this.virtualBuildOrders = response);
  }

  showContactInfo(order: ProductOrder) {
    this.contactFormComponent.contact = this.initializeContact(order);
    this.contactFormComponent.viewOnly = true;
    this.contactFormVisible = true;
  }

  initializeContact(order: ProductOrder | BuildOrder | VirtualBuildOrder): Contact {
    let contact: Contact = {};
    contact.contactName = order.contactName;
    contact.contactEmail = order.contactEmail;
    contact.contactNumber = order.contactNumber;
    return contact;
  }

  finishOrder(item: ProductOrder) {
    this.httpService.deleteDataById(environment.PRODUCT_ORDER, item.id).subscribe(() => {
      this.initProductOrders();
      this.messageService.add({ severity: 'success', detail: 'Заказ успешно обработан!' });
    })
  }

  finishBuildOrder(item: BuildOrder) {
    this.orderBuildId = item.id || 0;
    this.buildId = item.build?.id || 0;
    this.buildSoldPrice = item.build?.showPrice || 0;
    this.buildDialogVisible = true;
  }

  sellPcBuild() {
    this.httpService.sellPcBuild(this.buildId, this.buildSoldPrice).subscribe(() => {
      this.httpService.deleteDataById(environment.BUILD_ORDER, this.orderBuildId).subscribe(() => {
        this.buildSoldPrice = 0;
        this.buildDialogVisible = false;
        this.initBuildOrders();
      });
    })
  }

  processVirtualBuild(event: any, item: VirtualBuildOrder) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Завершение сборки приведет к удалению компонентов в ней! Хотите продолжить?`,
      header: 'Подтверждение',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Да',
      acceptIcon: "pi pi-check mr-2",
      rejectLabel: 'Нет',
      rejectIcon: "pi pi-times mr-2",
      rejectButtonStyleClass: "p-button-text bg-primary",
      accept: () => {
        this.httpService.deleteDataById(environment.VIRTUAL_BUILD_ORDER, item.id).subscribe((response: any) => {
          this.initVirtualBuildOrders();
          this.messageService.add({ severity: 'success', detail: 'Виртуальная сборка обработана!' });
        })
      }
    });
  }

  calculateVirtualBuildPrice(order: VirtualBuildOrder) {
    return this.getPrice(order.cpu) +
      this.getPrice(order.cooler) +
      this.getPrice(order.motherboard) +
      this.getPrice(order.memory) +
      this.getPrice(order.storage) +
      this.getPrice(order.gpu) +
      this.getPrice(order.psu) +
      this.getPrice(order.pcCase);
  }

  getPrice(item: any) {
    if (item.price) {
      return item.price;
    } else {
      return 0;
    }
  }

}

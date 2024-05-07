import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../models/product';
import { UtilsService } from '../../../services/utils.service';
import { Contact } from '../../../models/contact';
import { ProductOrder } from '../../../models/product-order';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  providers: [MessageService]
})
export class ProductPageComponent implements OnInit {

  contactFormVisible: boolean = false;

  productId: number = 0;
  product: Product = <Product>{};

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private messageService: MessageService
  ) {
    this.productId = activatedRoute.snapshot.params['productId'];
  }

  ngOnInit(): void {
    this.httpService.getDataById(environment.PRODUCTS, this.productId).subscribe((response: any) => this.product = response);
  }

  placeProductOrder(contact: Contact) {
    let productOrder = <ProductOrder>{};
    productOrder.product = <Product>{};
    productOrder.product.id = this.product.id;
    productOrder.contactName = contact.contactName;
    productOrder.contactEmail = contact.contactEmail;
    productOrder.contactNumber = contact.contactNumber;

    this.httpService.createData(environment.PRODUCT_ORDER, productOrder).subscribe(() => {
      this.contactFormVisible = false;
      this.messageService.add({ severity: 'success', detail: 'Заказ успешно оформлен!' });
    })
  }

}

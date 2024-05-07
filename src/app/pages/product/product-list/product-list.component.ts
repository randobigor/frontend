import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { HttpService } from '../../../services/http.service';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = [];
  categoryId: number = 0;
  currentProductCategory: String = '';
  messages: Message[] = [{ severity: 'success', summary: 'Упс!', detail: 'Похоже в этой категории еще нет товаров!' }];

  constructor(
    private httpService: HttpService,
    public utils: UtilsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.categoryId = activatedRoute.snapshot.params['categoryId'];
        this.loadProductsData();
      }
    })
  }

  loadProductsData() {
    if (this.categoryId != undefined && this.categoryId !== 0) {
      this.httpService.getDataById(environment.PRODUCTS_BY_CATEGORY, this.categoryId).subscribe((el: any) => { this.products = el });
    } else {
      this.httpService.getData(environment.PRODUCTS).subscribe((el: any) => { this.products = el });
    }
  }
}

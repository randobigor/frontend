import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from './services/theme.service';
import { Category } from './models/category';
import { HttpService } from './services/http.service';
import { environment } from '../environments/environment';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  productCategoriesMenuItems: MenuItem[] = [];
  checked: boolean = false;
  currentClass: string = 'pi pi-moon';

  constructor(
    private themeService: ThemeService,
    private httpService: HttpService,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.loadProductCategories();
  }

  loadProductCategories() {
    this.httpService.getData(environment.CATEGORIES).subscribe((response: any) => {
      this.storeService.initializeCategories(response);

      for (let productCategory of response) {
        this.productCategoriesMenuItems.push(
          { label: productCategory.name, routerLink: `products/category/${productCategory.id}` }
        )
      }

      this.populateMenuItems();
    });

  }

  populateMenuItems() {
    this.items = [
      {
        label: 'Домой',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'Готовые сборки',
        icon: 'pi pi-fw pi-desktop',
        routerLink: 'builds',
      },
      {
        label: 'Товары',
        icon: 'pi pi-fw pi-th-large',
        routerLink: 'products',
        items: this.productCategoriesMenuItems
      },
      {
        label: 'Категории',
        icon: 'pi pi-fw pi-align-justify',
        routerLink: 'categories'
      },
      {
        label: 'Конфигуратор',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'configurator'
      },
      {
        label: 'Статистика',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: 'statistics'
      },
      {
        label: 'Администрирование',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: 'administration'
      },
      {
        label: 'Заказы',
        icon: 'pi pi-fw pi-book',
        routerLink: 'orders'
      }
    ];
  }

  switchTheme() {
    this.checked = !this.checked;
    if (this.checked) {
      this.themeService.switchTheme('dark')
    } else {
      this.themeService.switchTheme('light')
    }
  }
}

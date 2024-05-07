import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './pages/category/list-categories/list-categories.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { ProductPageComponent } from './pages/product/product-page/product-page.component';
import { BuildCreateComponent } from './pages/builds/build-create/build-create.component';
import { BuildsListComponent } from './pages/builds/builds-list/builds-list.component';
import { BuildPageComponent } from './pages/builds/build-page/build-page.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { ConfiguratorComponent } from './pages/configurator/configurator/configurator.component';
import { CpuCreateEditComponent } from './pages/configurator/components/cpu-create-edit/cpu-create-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/edit/:productId', component: ProductCreateComponent },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'products/category/:categoryId', component: ProductListComponent },
  { path: 'builds/create', component: BuildCreateComponent },
  { path: 'builds', component: BuildsListComponent },
  { path: 'builds/edit/:buildId', component: BuildCreateComponent },
  { path: 'build/:buildId', component: BuildPageComponent },
  { path: 'statistics', component: StatisticsPageComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'configurator', component: ConfiguratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

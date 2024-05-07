import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListCategoriesComponent } from './pages/category/list-categories/list-categories.component'
import { HttpClientModule } from '@angular/common/http';
import { KnobModule } from 'primeng/knob';
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { MessagesModule } from 'primeng/messages';
import { AccordionModule } from 'primeng/accordion';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FieldsetModule } from 'primeng/fieldset';
import { MeterGroupModule } from 'primeng/metergroup';
import { InputMaskModule } from 'primeng/inputmask';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';

import { ProductPageComponent } from './pages/product/product-page/product-page.component';
import { ConditionPipe } from './pipes/condition.pipe';
import { StockAvailabilityPipe } from './pipes/stock-availability.pipe';
import { BuildsListComponent } from './pages/builds/builds-list/builds-list.component';
import { BuildCreateComponent } from './pages/builds/build-create/build-create.component';
import { BuildPageComponent } from './pages/builds/build-page/build-page.component';
import { PsuCertificatePipe } from './pipes/psu-certificate.pipe';
import { CoolerTypePipe } from './pipes/cooler-type.pipe';
import { CaseFormFactorPipe } from './pipes/case-form-factor.pipe';
import { AdministrationComponent } from './pages/administration/administration.component';
import { BuildPurposePipe } from './pipes/build-purpose.pipe';
import { ConfiguratorComponent } from './pages/configurator/configurator/configurator.component';
import { CpuCreateEditComponent } from './pages/configurator/components/cpu-create-edit/cpu-create-edit.component';
import { CaseCreateEditComponent } from './pages/configurator/components/case-create-edit/case-create-edit.component';
import { CoolerCreateEditComponent } from './pages/configurator/components/cooler-create-edit/cooler-create-edit.component';
import { MotherboardCreateEditComponent } from './pages/configurator/components/motherboard-create-edit/motherboard-create-edit.component';
import { MemoryCreateEditComponent } from './pages/configurator/components/memory-create-edit/memory-create-edit.component';
import { StorageCreateEditComponent } from './pages/configurator/components/storage-create-edit/storage-create-edit.component';
import { GpuCreateEditComponent } from './pages/configurator/components/gpu-create-edit/gpu-create-edit.component';
import { PsuCreateEditComponent } from './pages/configurator/components/psu-create-edit/psu-create-edit.component';
import { CpuSelectListComponent } from './pages/configurator/components/cpu-select-list/cpu-select-list.component';
import { CoolerSelectListComponent } from './pages/configurator/components/cooler-select-list/cooler-select-list.component';
import { MotherboardSelectListComponent } from './pages/configurator/components/motherboard-select-list/motherboard-select-list.component';
import { RamSelectListComponent } from './pages/configurator/components/ram-select-list/ram-select-list.component';
import { RomSelectListComponent } from './pages/configurator/components/rom-select-list/rom-select-list.component';
import { GpuSelectListComponent } from './pages/configurator/components/gpu-select-list/gpu-select-list.component';
import { PsuSelectListComponent } from './pages/configurator/components/psu-select-list/psu-select-list.component';
import { CaseSelectListComponent } from './pages/configurator/components/case-select-list/case-select-list.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DatetimePipe } from './pipes/datetime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    ProductListComponent,
    StatisticsPageComponent,
    ProductCreateComponent,
    ProductPageComponent,
    ConditionPipe,
    StockAvailabilityPipe,
    BuildsListComponent,
    BuildCreateComponent,
    BuildPageComponent,
    PsuCertificatePipe,
    CoolerTypePipe,
    CaseFormFactorPipe,
    AdministrationComponent,
    BuildPurposePipe,
    ConfiguratorComponent,
    CpuCreateEditComponent,
    CaseCreateEditComponent,
    CoolerCreateEditComponent,
    MotherboardCreateEditComponent,
    MemoryCreateEditComponent,
    StorageCreateEditComponent,
    GpuCreateEditComponent,
    PsuCreateEditComponent,
    CpuSelectListComponent,
    CoolerSelectListComponent,
    MotherboardSelectListComponent,
    RamSelectListComponent,
    RomSelectListComponent,
    GpuSelectListComponent,
    PsuSelectListComponent,
    CaseSelectListComponent,
    ContactFormComponent,
    HomeComponent,
    OrdersComponent,
    DatetimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //PrimeNG modules
    KnobModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    CardModule,
    ToastModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputSwitchModule,
    DropdownModule,
    EditorModule,
    CheckboxModule,
    DividerModule,
    CarouselModule,
    ImageModule,
    ChipModule,
    GalleriaModule,
    BadgeModule,
    MessagesModule,
    AccordionModule,
    InputNumberModule,
    PanelModule,
    DataViewModule,
    ToggleButtonModule,
    FieldsetModule,
    MeterGroupModule,
    InputMaskModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { environment } from '../../../../environments/environment';
import { Category } from '../../../models/category';
import { Product } from '../../../models/product';
import { AdditionalCost } from '../../../models/additionalcost';
import { MessageService, ConfirmationService } from 'primeng/api';
import { PictureToBase64ConverterService } from '../../../services/picture-to-base64-converter.service';
import { Image } from '../../../models/image';
import { constants } from '../../../../environments/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class ProductCreateComponent implements OnInit {

  constantOptions = constants;

  categories: Category[] = [];
  selectedCategory: any = null;
  selectedStock: any = null;
  editing: boolean = false;
  dialogVisible: boolean = false;
  finalPrice: number = 0;

  productId: number = 0;
  product: Product = <Product>{};

  descriptionImages: Image[] = [];

  // Additional cost
  hasAdditionalCosts: boolean = false;
  additionalCosts: AdditionalCost[] = [];
  tempAdditionalCost: AdditionalCost = <AdditionalCost>{};

  responsiveOptions: any[] | undefined;

  constructor(
    private httpService: HttpService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private converter: PictureToBase64ConverterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.productId = activatedRoute.snapshot.params['productId'];
  }

  ngOnInit(): void {
    this.loadCategories();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    if (this.productId != 0) {
      this.httpService.getDataById(environment.PRODUCTS, this.productId).subscribe((response: Product) => {
        this.product = response;
        this.product.categoryId = response.category?.id || 0;
        this.descriptionImages = response.images || [];
        this.hasAdditionalCosts = response.additionalCosts!.length > 0;
        this.additionalCosts = response.additionalCosts || [];
      });
    }
  }

  loadCategories() {
    this.httpService.getData(environment.CATEGORIES).subscribe((response: Category[]) => this.categories = response)
  }

  addNewProduct() {
    this.httpService.createData(environment.PRODUCTS, this.product).subscribe((resp: any) => console.log(resp));

  }

  addAdditionalCost() {
    this.additionalCosts.push(this.tempAdditionalCost);
    this.tempAdditionalCost = <AdditionalCost>{};
  }

  calculateAdditionalCosts() {
    return this.additionalCosts.reduce((n, { amount }) => { if (amount) { return n + amount } else return 0 }, 0);
  }

  showDeleteConfirmDialog(additionalcost: AdditionalCost) {
    this.additionalCosts.splice(this.additionalCosts.indexOf(additionalcost), 1);
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.descriptionImages.push(image);
  }

  calculateFinalPrice() {
    this.dialogVisible = true;
    this.finalPrice = this.product.price + this.calculateAdditionalCosts();
  }

  submitProduct() {
    this.product.additionalCosts = this.additionalCosts;
    this.product.images = this.descriptionImages;

    if (this.finalPrice != 0 && this.finalPrice != (this.product.price + this.calculateAdditionalCosts())) {
      this.product.price = this.finalPrice;
    }

    this.httpService.createData('product', this.product).subscribe(() => {
      this.router.navigate([`/products/category/${this.product.categoryId}`])
    });
  }
}

import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { AdditionalCost } from '../../../models/additionalcost';
import { HttpService } from '../../../services/http.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PictureToBase64ConverterService } from '../../../services/picture-to-base64-converter.service';
import { environment } from '../../../../environments/environment';
import { Image } from '../../../models/image';
import { Build } from '../../../models/build';
import { constants } from '../../../../environments/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-build-create',
  templateUrl: './build-create.component.html',
  styleUrl: './build-create.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class BuildCreateComponent {

  buildId: number = 0;

  constantOptions = constants;

  categories: Category[] = [];
  selectedStock: any = null;
  editing: boolean = false;
  dialogVisible: boolean = false;
  finalPrice: number = 0;

  build: Build = <Build>{};

  descriptionImages: Image[] = [];

  // Additional cost
  hasAdditionalCosts: any = false;
  additionalCosts: AdditionalCost[] = [];
  tempAdditionalCost: AdditionalCost = <AdditionalCost>{};

  responsiveOptions: any[] | undefined;

  constructor(
    private httpService: HttpService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private converter: PictureToBase64ConverterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildId = activatedRoute.snapshot.params['buildId'];
  }

  ngOnInit(): void {
    if (this.buildId != 0) {
      this.httpService.getDataById(environment.BUILDS, this.buildId).subscribe((response: Build) => {
        this.build = response;
        this.descriptionImages = response.images || [];
        this.hasAdditionalCosts = response.additionalCosts!.length > 0;
        this.additionalCosts = response.additionalCosts || [];
      });
    }

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
  }

  addNewProduct() {
    this.httpService.createData(environment.BUILDS, this.build).subscribe((resp: any) => console.log(resp));

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
    this.finalPrice = this.build.price + this.calculateAdditionalCosts();
  }

  submitProduct() {
    this.build.additionalCosts = this.additionalCosts;
    this.build.images = this.descriptionImages;

    if (this.finalPrice != 0) {
      this.build.price = this.finalPrice;
    }

    this.httpService.createData(environment.BUILDS, this.build).subscribe(() => { this.router.navigate(['/builds']) });
  }
}

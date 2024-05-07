import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cooler } from '../../../../models/components/cooler';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Image } from '../../../../models/image';

@Component({
  selector: 'app-cooler-create-edit',
  templateUrl: './cooler-create-edit.component.html',
  styleUrl: './cooler-create-edit.component.scss'
})
export class CoolerCreateEditComponent {

  @Input() tempCooler: any;
  @Output() coolerSubmitEvent = new EventEmitter<Cooler>;

  cooler: Cooler = <Cooler>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempCooler) {
      this.cooler = this.tempCooler;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.cooler.image = image;
  }

  submitCooler() {
    this.coolerSubmitEvent.emit(this.cooler);
    this.cooler = <Cooler>{};
  }
}

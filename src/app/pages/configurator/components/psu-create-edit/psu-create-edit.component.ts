import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Image } from '../../../../models/image';
import { Powersupply } from '../../../../models/components/powersupply';

@Component({
  selector: 'app-psu-create-edit',
  templateUrl: './psu-create-edit.component.html',
  styleUrl: './psu-create-edit.component.scss'
})
export class PsuCreateEditComponent {

  @Input() tempPsu: any;
  @Output() psuSubmitEvent = new EventEmitter<Powersupply>;

  psu: Powersupply = <Powersupply>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempPsu) {
      this.psu = this.tempPsu;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.psu.image = image;
  }

  submitPsu() {
    this.psuSubmitEvent.emit(this.psu);
    this.psu = <Powersupply>{};
  }
}

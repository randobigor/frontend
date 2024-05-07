import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Motherboard } from '../../../../models/components/motherboard';
import { Image } from '../../../../models/image';

@Component({
  selector: 'app-motherboard-create-edit',
  templateUrl: './motherboard-create-edit.component.html',
  styleUrl: './motherboard-create-edit.component.scss'
})
export class MotherboardCreateEditComponent {

  @Input() tempMotherboard: any;
  @Output() motherboardSubmitEvent = new EventEmitter<Motherboard>;

  motherboard: Motherboard = <Motherboard>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempMotherboard) {
      this.motherboard = this.tempMotherboard;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.motherboard.image = image;
  }

  submitMotherboard() {
    this.motherboardSubmitEvent.emit(this.motherboard);
    this.motherboard = <Motherboard>{};
  }

}

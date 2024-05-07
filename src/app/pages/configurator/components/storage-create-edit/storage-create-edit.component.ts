import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Image } from '../../../../models/image';
import { Storage } from '../../../../models/components/storage';

@Component({
  selector: 'app-storage-create-edit',
  templateUrl: './storage-create-edit.component.html',
  styleUrl: './storage-create-edit.component.scss'
})
export class StorageCreateEditComponent {

  @Input() tempStorage: any;
  @Output() storageSubmitEvent = new EventEmitter<Storage>;

  storage: Storage = <Storage>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempStorage) {
      this.storage = this.tempStorage;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.storage.image = image;
  }

  submitStorage() {
    this.storageSubmitEvent.emit(this.storage);
    this.storage = <Storage>{};
  }

}

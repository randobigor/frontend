import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Image } from '../../../../models/image';
import { Memory } from '../../../../models/components/memory';

@Component({
  selector: 'app-memory-create-edit',
  templateUrl: './memory-create-edit.component.html',
  styleUrl: './memory-create-edit.component.scss'
})
export class MemoryCreateEditComponent {

  @Input() tempMemory: any;
  @Output() memorySubmitEvent = new EventEmitter<Memory>;

  memory: Memory = <Memory>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempMemory) {
      this.memory = this.tempMemory;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.memory.image = image;
  }

  submitMemory() {
    this.memorySubmitEvent.emit(this.memory);
    this.memory = <Memory>{};
  }

}

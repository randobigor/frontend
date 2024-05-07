import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Image } from '../../../../models/image';
import { Gpu } from '../../../../models/components/gpu';

@Component({
  selector: 'app-gpu-create-edit',
  templateUrl: './gpu-create-edit.component.html',
  styleUrl: './gpu-create-edit.component.scss'
})
export class GpuCreateEditComponent {

  @Input() tempGpu: any;
  @Output() gpuSubmitEvent = new EventEmitter<Gpu>;

  gpu: Gpu = <Gpu>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempGpu) {
      this.gpu = this.tempGpu;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.gpu.image = image;
  }

  submitMemory() {
    this.gpuSubmitEvent.emit(this.gpu);
    this.gpu = <Gpu>{};
  }

}

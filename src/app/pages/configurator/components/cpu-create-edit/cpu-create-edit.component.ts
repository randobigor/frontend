import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cpu } from '../../../../models/components/cpu';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Image } from '../../../../models/image';

@Component({
  selector: 'app-cpu-create-edit',
  templateUrl: './cpu-create-edit.component.html',
  styleUrl: './cpu-create-edit.component.scss'
})
export class CpuCreateEditComponent{

  @Input() tempCpu: any;
  @Output() cpuSubmitEvent = new EventEmitter<Cpu>;

  cpu: Cpu = <Cpu>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempCpu) {
      this.cpu = this.tempCpu;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.cpu.image = image;
  }

  submitCpu() {
    this.cpuSubmitEvent.emit(this.cpu);
    this.cpu = <Cpu>{};
  }
}

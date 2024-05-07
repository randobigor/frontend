import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Case } from '../../../../models/components/case';
import { constants } from '../../../../../environments/constants';
import { PictureToBase64ConverterService } from '../../../../services/picture-to-base64-converter.service';
import { Image } from '../../../../models/image';

@Component({
  selector: 'app-case-create-edit',
  templateUrl: './case-create-edit.component.html',
  styleUrl: './case-create-edit.component.scss'
})
export class CaseCreateEditComponent {

  @Input() tempCase: any;
  @Output() caseSubmitEvent = new EventEmitter<Case>;

  case: Case = <Case>{};
  constantOptions = constants;

  constructor(private converter: PictureToBase64ConverterService) {
    if (this.tempCase) {
      this.case = this.tempCase;
    }
  }

  async addDescriptionPicture(el: any) {
    let imageContent = await this.converter.convertPictureToString(el);
    let image: Image = <Image>{};
    image.content = imageContent;
    this.case.image = image;
  }

  submitCase() {
    this.caseSubmitEvent.emit(this.case);
    this.case = <Case>{};
  }
}

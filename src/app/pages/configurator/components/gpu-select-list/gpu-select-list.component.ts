import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { Gpu } from '../../../../models/components/gpu';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-gpu-select-list',
  templateUrl: './gpu-select-list.component.html',
  styleUrl: './gpu-select-list.component.scss'
})
export class GpuSelectListComponent {

  @Output() gpuSubmitEvent = new EventEmitter<Gpu>;

  gpus: Gpu[] = [];

  constructor(private httpService: HttpService) {
    this.httpService.getData(environment.GPU).subscribe((response: Gpu[]) => this.gpus = response);
  }

  submit(gpu: Gpu) {
    this.gpuSubmitEvent.emit(gpu);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { Cpu } from '../../../../models/components/cpu';
import { environment } from '../../../../../environments/environment';
import { Cooler } from '../../../../models/components/cooler';

@Component({
  selector: 'app-cooler-select-list',
  templateUrl: './cooler-select-list.component.html',
  styleUrl: './cooler-select-list.component.scss'
})
export class CoolerSelectListComponent {

  @Output() coolerSubmitEvent = new EventEmitter<Cooler>;

  coolers: Cooler[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData(environment.COOLER).subscribe((response: Cooler[]) => this.coolers = response);
  }

  submitCpu(cpu: Cpu) {
    this.coolerSubmitEvent.emit(cpu);
  }
}

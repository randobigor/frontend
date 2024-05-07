import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { Cpu } from '../../../../models/components/cpu';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-cpu-select-list',
  templateUrl: './cpu-select-list.component.html',
  styleUrl: './cpu-select-list.component.scss'
})
export class CpuSelectListComponent {

  @Output() cpuSubmitEvent = new EventEmitter<Cpu>;

  cpus: Cpu[] = [];

  constructor(private httpService: HttpService) {

  }

  submitCpu(cpu: Cpu) {
    this.cpuSubmitEvent.emit(cpu);
  }

  loadAllCpus() {
    this.httpService.getData(environment.CPU).subscribe((response: Cpu[]) => this.cpus = response);
  }

  loadCpusWithFilter(socket: string) {
    this.httpService.findAllCpusBySocket(socket).subscribe((response: Cpu[]) => this.cpus = response);
  }
}

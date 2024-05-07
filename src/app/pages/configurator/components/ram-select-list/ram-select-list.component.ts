import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { environment } from '../../../../../environments/environment';
import { Memory } from '../../../../models/components/memory';

@Component({
  selector: 'app-ram-select-list',
  templateUrl: './ram-select-list.component.html',
  styleUrl: './ram-select-list.component.scss'
})
export class RamSelectListComponent {

  @Output() ramSubmitEvent = new EventEmitter<Memory>;

  memories: Memory[] = [];

  constructor(private httpService: HttpService) {}

  findAll() {
    this.httpService.getData(environment.MEMORY).subscribe((response: Memory[]) => this.memories = response);
  }

  findAllByRamType(ramType: string) {
    this.httpService.getRamByType(ramType).subscribe((response: Memory[]) => this.memories = response);
  }

  submit(memory: Memory) {
    this.ramSubmitEvent.emit(memory);
  }
}

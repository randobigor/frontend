import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { environment } from '../../../../../environments/environment';
import { Motherboard } from '../../../../models/components/motherboard';


@Component({
  selector: 'app-motherboard-select-list',
  templateUrl: './motherboard-select-list.component.html',
  styleUrl: './motherboard-select-list.component.scss'
})
export class MotherboardSelectListComponent {

  @Output() motherboardSubmitEvent = new EventEmitter<Motherboard>;

  motherboards: Motherboard[] = [];

  constructor(private httpService: HttpService) { }

  findAll() {
    this.httpService.getData(environment.MOTHERBOARD).subscribe((response: Motherboard[]) => this.motherboards = response);
  }

  findBySocket(socket: string) {
    this.httpService.findAllMotherboardsBySocket(socket).subscribe((response: Motherboard[]) => this.motherboards = response);
  }

  findByRamType(ramType: string) {
    this.httpService.findAllMotherboardsByRamType(ramType).subscribe((response: Motherboard[]) => this.motherboards = response);
  }

  findBySocketAndRamType(socket: string, ramType: string) {
    this.httpService.findAllMotherboardsBySocketAndRamType(socket, ramType).subscribe((response: Motherboard[]) => this.motherboards = response);
  }

  submit(motherboard: Motherboard) {
    this.motherboardSubmitEvent.emit(motherboard);
  }

  loadWithFilter() {

  }
}

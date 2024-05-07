import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Powersupply } from '../../../../models/components/powersupply';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-psu-select-list',
  templateUrl: './psu-select-list.component.html',
  styleUrl: './psu-select-list.component.scss'
})
export class PsuSelectListComponent {

  @Output() psuSubmitEvent = new EventEmitter<Powersupply>;

  powersupplies: Powersupply[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData(environment.PSU).subscribe((response: Powersupply[]) => this.powersupplies = response);
  }

  submit(psu: Powersupply) {
    this.psuSubmitEvent.emit(psu);
  }
}

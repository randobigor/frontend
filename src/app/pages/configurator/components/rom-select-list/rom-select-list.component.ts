import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { environment } from '../../../../../environments/environment';
import { Storage } from '../../../../models/components/storage';

@Component({
  selector: 'app-rom-select-list',
  templateUrl: './rom-select-list.component.html',
  styleUrl: './rom-select-list.component.scss'
})
export class RomSelectListComponent {

  @Output() romSubmitEvent = new EventEmitter<Storage>;

  storages: Storage[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData(environment.STORAGE).subscribe((response: Storage[]) => this.storages = response);
  }

  submit(storage: Storage) {
    this.romSubmitEvent.emit(storage);
  }
}

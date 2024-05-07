import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpService } from '../../../../services/http.service';
import { Case } from '../../../../models/components/case';


@Component({
  selector: 'app-case-select-list',
  templateUrl: './case-select-list.component.html',
  styleUrl: './case-select-list.component.scss'
})
export class CaseSelectListComponent {

  @Output() caseSubmitEvent = new EventEmitter<Case>;

  cases: Case[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData(environment.CASE).subscribe((response: Case[]) => this.cases = response);
  }

  submit(caseBody: Case) {
    this.caseSubmitEvent.emit(caseBody);
  }
}

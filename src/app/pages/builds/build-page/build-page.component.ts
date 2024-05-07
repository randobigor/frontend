import { Component } from '@angular/core';
import { Build } from '../../../models/build';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { environment } from '../../../../environments/environment';
import { Contact } from '../../../models/contact';
import { BuildOrder } from '../../../models/build-order';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-build-page',
  templateUrl: './build-page.component.html',
  styleUrl: './build-page.component.scss',
  providers: [MessageService]
})
export class BuildPageComponent {

  contactFormVisible: boolean = false;

  buildId: number = 0;
  build: Build = <Build>{};

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private messageService: MessageService
  ) {
    this.buildId = activatedRoute.snapshot.params['buildId'];
  }

  ngOnInit(): void {
    this.httpService.getDataById(environment.BUILDS, this.buildId).subscribe((response: Build) => { this.build = response; console.log(response) });
  }

  placeProductOrder(contact: Contact) {
    let buildOrder = <BuildOrder>{};
    buildOrder.build = <Build>{};
    buildOrder.build.id = this.build.id;
    buildOrder.contactName = contact.contactName;
    buildOrder.contactEmail = contact.contactEmail;
    buildOrder.contactNumber = contact.contactNumber;

    this.httpService.createData(environment.BUILD_ORDER, buildOrder).subscribe(() => {
      this.contactFormVisible = false;
      this.messageService.add({ severity: 'success', detail: 'Заказ успешно оформлен!' });
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Build } from '../../../models/build';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';
import { environment } from '../../../../environments/environment';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-builds-list',
  templateUrl: './builds-list.component.html',
  styleUrl: './builds-list.component.scss'
})
export class BuildsListComponent implements OnInit {
  builds: Build[] = [];
  categoryId: number = 0;
  currentProductCategory: String = '';
  messages: Message[] = [{ severity: 'success', summary: 'Упс!', detail: 'Похоже новых сборок еще нет!' }];

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.httpService.getData(environment.BUILDS).subscribe((response: Build[]) => this.builds = response);
  }

  getProductImage(build: Build) {
    if (build.images != undefined) {
      return build.images[0].content;
    } else {
      return 'https://primefaces.org/cdn/primeng/images/usercard.png';
    }
  }
}

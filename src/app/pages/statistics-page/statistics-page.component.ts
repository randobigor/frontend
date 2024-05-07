import { Component, OnInit } from '@angular/core';
import { Build } from '../../models/build';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss'
})
export class StatisticsPageComponent implements OnInit {

  soldBuilds: Build[] = [];
  buildCpus: any;

  constructor(private httpService: HttpService, public utils: UtilsService) {

  }

  ngOnInit(): void {
    this.httpService.getData(environment.SOLD_BUILDS).subscribe((response: Build[]) => this.soldBuilds = response);
  }

  getProfitSeverity(profit: number) {
    if (profit > 0) {
      return 'text-green-600';
    } else if (profit < 0) {
      return 'text-red-500';
    }

    return;
  }

  calculateBuildCpus() {
    let amdCount = this.soldBuilds.filter(build => build.cpuVendor === 'AMD').length;
    let intelCount = this.soldBuilds.filter(build => build.cpuVendor === 'Intel').length;

    return [
      { label: 'AMD', color: '#FB5424', fontColor: '#FFFFFF', count: amdCount, value: this.utils.percentage(amdCount, this.soldBuilds.length) },
      { label: 'Intel', color: '#60a5fa', fontColor: '#000000', count: intelCount, value: this.utils.percentage(intelCount, this.soldBuilds.length) },
    ]
  }

  calculateBuildPurpose() {
    let gamingCount = this.soldBuilds.filter(build => build.buildPurpose === 'GAMING').length;
    let officeCount = this.soldBuilds.filter(build => build.buildPurpose === 'OFFICE').length;

    return [
      { label: 'Игровой', color: '#34d399', fontColor: '#000', count: gamingCount, value: this.utils.percentage(gamingCount, this.soldBuilds.length) },
      { label: 'Офисный', color: '#fbbf24', fontColor: '#0440db', count: officeCount, value: this.utils.percentage(officeCount, this.soldBuilds.length) },
    ]
  }

  calculateBuildGpus() {
    let amdCount = this.soldBuilds.filter(build => build.gpuVendor === 'AMD').length;
    let nvidiaCount = this.soldBuilds.filter(build => build.gpuVendor === 'Nvidia').length;

    return [
      { label: 'AMD', color: '#FB5424', fontColor: '#ffffff', count: amdCount, value: this.utils.percentage(amdCount, this.soldBuilds.length) },
      { label: 'Nvidia', color: '#34d399', fontColor: '#000000', count: nvidiaCount, value: this.utils.percentage(nvidiaCount, this.soldBuilds.length) },
    ]
  }

  calculateBuildsPrices() {
    let zeroToThree = this.soldBuilds.filter(build => build.soldPrice && build.soldPrice > 0 && build.soldPrice < 3000).length;
    let threeToFive = this.soldBuilds.filter(build => build.soldPrice && build.soldPrice >= 3000 && build.soldPrice < 5000).length;
    let fiveToSevenCount = this.soldBuilds.filter(build => build.soldPrice && build.soldPrice >= 5000 && build.soldPrice < 7000).length;
    let seventToTenCount = this.soldBuilds.filter(build => build.soldPrice && build.soldPrice >= 7000 && build.soldPrice < 10000).length;
    let tenPlusCount = this.soldBuilds.filter(build => build.soldPrice && build.soldPrice > 10000).length;

    return [
      { label: 'До 3 000', color: '#34d399', fontColor: '#000', count: zeroToThree, value: this.utils.percentage(zeroToThree, this.soldBuilds.length) },
      { label: '3 000 - 5 000', color: '#fbbf24', fontColor: '#0440db', count: threeToFive, value: this.utils.percentage(threeToFive, this.soldBuilds.length) },
      { label: '5 000 - 7 000', color: '#216656', fontColor: '#fff', count: fiveToSevenCount, value: this.utils.percentage(fiveToSevenCount, this.soldBuilds.length) },
      { label: '7 000 - 10 000', color: '#FB5424', fontColor: '#fff', count: seventToTenCount, value: this.utils.percentage(seventToTenCount, this.soldBuilds.length) },
      { label: '10 000+', color: '#c084fc', fontColor: '#000', count: tenPlusCount, value: this.utils.percentage(tenPlusCount, this.soldBuilds.length) },
    ]
  }

}

import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  getProductImage(product: any) {
    if (product.images != undefined) {
      return product.images[0].content;
    } else {
      return 'https://primefaces.org/cdn/primeng/images/usercard.png';
    }
  }

  percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  }

  formatDateTime(value: any) {
    let date = new Date(String(value));
    return `${date.getDay()}-го ${this.getMonth(date.getMonth())} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  }

  getMonth(monthNumber: number) {
    switch (monthNumber) {
      case 0: return 'Января';
      case 1: return 'Февряля';
      case 2: return 'Марта';
      case 3: return 'Апреля';
      case 4: return 'Мая';
      case 5: return 'Июня';
      case 6: return 'Июля';
      case 7: return 'Августа';
      case 8: return 'Сентября';
      case 9: return 'Октября';
      case 10: return 'Ноября';
      case 11: return 'Декабря';
      default: return 'N/A'
    }
  }
}

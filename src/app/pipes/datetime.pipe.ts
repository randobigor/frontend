import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
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

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockAvailability'
})
export class StockAvailabilityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'STOCK_PROVIDER':
        return 'В наличии';
      case 'STOCK_WAREHOUSE':
        return 'На складе';
      case 'OUT_OF_STOCK':
        return 'Нет в наличии';
    }
    return null;
  }

}

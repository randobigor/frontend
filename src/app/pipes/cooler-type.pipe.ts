import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coolerType'
})
export class CoolerTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'AIR':
        return 'Воздушное';
      case 'AIO':
        return 'Водяное (неосблуживаемое)';
      case 'WATER_CUSTOM':
        return 'Водяное (кастомное)';
    }

    return null;
  }

}

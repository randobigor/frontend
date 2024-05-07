import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'psuCertificate'
})
export class PsuCertificatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'WO':
        return 'Отсутствует';
      case '80P':
        return '80+';
      case '80PB':
        return '80+ Bronze';
      case '80PG':
        return '80+ Gold';
      case '80PP':
        return '80+ Platinum';
      case '80PT':
        return '80+ Titanium';
    }

    return null;
  }

}

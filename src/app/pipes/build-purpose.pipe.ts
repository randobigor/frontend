import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buildPurpose'
})
export class BuildPurposePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'GAMING': return 'Игровой';
      case 'OFFICE': return 'Офисный';
    }

    return null;
  }

}

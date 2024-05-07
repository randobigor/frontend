import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'condition'
})
export class ConditionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'NEW':
        return 'Новый';
      case 'SECOND_HAND':
        return 'Б/У';
    }
    return null;
  }

}

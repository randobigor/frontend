import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseFormFactor'
})
export class CaseFormFactorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'MINT':
        return 'Mini Tower';
      case 'MIDT':
        return 'Middle Tower';
      case 'FULT':
        return 'Full Tower';
    }

    return null;
  }

}

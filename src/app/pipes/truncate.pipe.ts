import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, size: number = 20): any {
    // Trunca strings para tamanho 20.
    if (value.length > size) {
      return value.substring(0, size) + '...'
    }
    return value;
  }

}

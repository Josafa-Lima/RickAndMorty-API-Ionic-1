import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'low',
  standalone: false
})
export class LowPipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.toLowerCase() : '';
  }

}

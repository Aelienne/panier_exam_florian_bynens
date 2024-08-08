import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalTTC',
  standalone: true
})
export class TotalTTCPipe implements PipeTransform {

  transform(ht: number): number {
    return ht + (ht * 20) / 100;
  }

}

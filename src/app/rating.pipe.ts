import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number, showNumbers?: boolean): string {
    if (!value) {
      return '';
    } else if (showNumbers) {
      return value.toString()
    }else if (value >= 8) {
      return 'great';
    } else if (value >= 7) {
      return 'good';
    } else if (value >= 5.5) {
      return 'ok';
    } else {
      return 'bad';
    }
  }

}

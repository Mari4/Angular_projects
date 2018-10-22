import { Pipe, PipeTransform } from '@angular/core';
import { WithName } from './with-name';

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {

  transform(values: WithName[]): string {
    if (!values) { return '';}
    return values
     .map(withName => withName.name)
     .join (', ');
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../app.component';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arrNumbers: Book[], field: string): Book[] {
    if (!arrNumbers) return [];
    if (field != '') {
      return arrNumbers.filter((numb: any) => {
        if (numb.Fname.toLowerCase().includes(field.toLowerCase()))
          return numb.Fname.toLowerCase().includes(field.toLowerCase());
        if (numb.Lname.toLowerCase().includes(field.toLowerCase()))
          return numb.Lname.toLowerCase().includes(field.toLowerCase());
        if (String(numb.number).includes(field))
          return String(numb.number).includes(field);
      });
    } else {
      return arrNumbers;
    }
  }
}

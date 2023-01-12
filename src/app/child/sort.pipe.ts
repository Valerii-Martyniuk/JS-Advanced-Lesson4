import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../app.component';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(tasks: Book[], sortDirection: string): Book[] {
    if (!tasks) return [];
    if (sortDirection === 'Fname')
      return tasks.sort((a: any, b: any) =>
        a.Fname > b.Fname ? 1 : a.Fname < b.Fname ? -1 : 0
      );
    else if (sortDirection === 'Lname')
      return tasks.sort((a: any, b: any) =>
        a.Lname > b.Lname ? 1 : a.Lname < b.Lname ? -1 : 0
      );
    else if (sortDirection === 'number')
      return tasks.sort((a: any, b: any) =>
        a.number > b.number ? 1 : a.number < b.number ? -1 : 0
      );
    else if (sortDirection === 'FnameEnd')
      return tasks.sort((a: any, b: any) =>
        a.Fname < b.Fname ? 1 : a.Fname > b.Fname ? -1 : 0
      );
    else if (sortDirection === 'LnameEnd')
      return tasks.sort((a: any, b: any) =>
        a.Lname < b.Lname ? 1 : a.Lname > b.Lname ? -1 : 0
      );
    else if (sortDirection === 'numberEnd')
      return tasks.sort((a: any, b: any) =>
        a.number < b.number ? 1 : a.number > b.number ? -1 : 0
      );
    else {
      return tasks;
    }
  }
}

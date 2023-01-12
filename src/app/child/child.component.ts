import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() tasks: any;
  @Input() field: any;
  @Input() display: any;
  @Output() disp = new EventEmitter();

  public sortDirection!: string;

  displayChange(i: number): any {
    this.display = !this.display;
    this.disp.emit([this.display, i, 'Change']);
  }
  deletNumb(i: number): void {
    this.tasks.splice(i, 1);
  }
  sortByName(type: any): any {
    if (type === 'Fname') {
      if (this.sortDirection === 'Fname') {
        return (this.sortDirection = 'FnameEnd');
      } else {
        return (this.sortDirection = type);
      }
    }

    if (type === 'Lname') {
      if (this.sortDirection === 'Lname') {
        return (this.sortDirection = 'LnameEnd');
      } else {
        return (this.sortDirection = type);
      }
    }
    if (type === 'number') {
      if (this.sortDirection === 'number') {
        return (this.sortDirection = 'numberEnd');
      } else {
        return (this.sortDirection = type);
      }
    }
  }
}

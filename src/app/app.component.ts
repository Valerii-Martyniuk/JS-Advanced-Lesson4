import { Component, Output, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;

  public oneMoreTask = '';
  public field = '';
  public newName = '';
  public newLName = '';
  public newNumber = '';
  public numData!: number;
  public display!: boolean;
  public editNumber!: number;
  public btnAddChange!: string;

  public tasksList: Book[] = [
    { Fname: 'Ivan', Lname: 'Inesovich', number: 380966998751 },
    { Fname: 'Ted', Lname: 'Perton', number: 380966998752 },
    { Fname: 'Anton', Lname: 'Dymkas', number: 380966998753 },
    { Fname: 'Taras', Lname: 'Silverton', number: 380966998754 },
    { Fname: 'Olena', Lname: 'Kroppi', number: 380966998755 },
    { Fname: 'Iryna', Lname: 'Pimpas', number: 380966998756 },
    { Fname: 'Tamara', Lname: 'Alercov', number: 380966998757 },
  ];

  getdisp(event: any) {
    this.display = event[0];
    this.editNumber = event[1];
    this.btnAddChange = event[2];
    this.newName = this.tasksList[event[1]].Fname;
    this.newLName = this.tasksList[event[1]].Lname;
    this.newNumber = String(this.tasksList[event[1]].number);
  }
  displayChange(): void {
    if (this.newName === '') {
      this.btnAddChange = 'Add';
    }

    this.display = !this.display;
  }
  changeContact(): any {
    if (this.newName === '') return alert('write Name');
    if (this.newNumber === '') return alert('write Number');
    if (this.btnAddChange === 'Change') {
      this.tasksList[this.editNumber].Fname = this.newName;
      this.tasksList[this.editNumber].Lname = this.newLName;
      this.tasksList[this.editNumber].number = Number(this.newNumber);
      this.display = !this.display;
      this.newName = '';
      this.newLName = '';
      this.newNumber = '';
    } else {
      let newContact: Book = {
        Fname: this.newName,
        Lname: this.newLName,
        number: Number(this.newNumber),
      };
      this.tasksList.push(newContact);
      this.display = !this.display;
      this.newName = '';
      this.newLName = '';
      this.newNumber = '';
    }
  }
}

export interface Book {
  Fname: string;
  Lname: string;
  number: number;
}

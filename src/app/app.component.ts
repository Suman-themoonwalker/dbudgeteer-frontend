import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'dbudgeteer';
  showExpense: boolean = true;
  check: string = '';

  onClick() {
    this.showExpense = false;
    console.log('showExpense changed to True');
    console.log(this.showExpense);
  }

  show(event: any) {
    console.log(event);
    this.check = event.target.value;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Events';

  ans : number | undefined;

  add(newn1: HTMLInputElement, newn2: HTMLInputElement)
  {
    this.ans = parseInt(newn1.value) + parseInt(newn2.value);    
  }
}

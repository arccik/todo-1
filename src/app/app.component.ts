import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
template: '<h1> Welcome to {{this.title}} </h1> <li *ngFor="let item of [1,2,3,4]; index as i">{{i}}...</li>',
  styles: ['h1 { color: red}']
})
export class AppComponent {
  title = 'Todo';
}

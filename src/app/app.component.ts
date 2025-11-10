import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //only accept string
  title: string = 'learn-angular';

  //only accept number
  count: number = 10;

  //string and number both accept
  data: string | number = 'dummy data';

  //only accept boolean
  isValid: boolean = true;

  //accept any data
  storeData: any = '';

  onClick() {
    alert('button clicked');
  }
}

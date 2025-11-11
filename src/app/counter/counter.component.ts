import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count: number = 0;
  onCountHandler(data: string) {
    console.log('data: ', data);
    if (data == 'inc') {
      this.count = this.count + 1;
    } else if (data == 'dec') {
      this.count = this.count > 0 ? this.count - 1 : 0;
    } else {
      this.count = 0;
    }
  }
}

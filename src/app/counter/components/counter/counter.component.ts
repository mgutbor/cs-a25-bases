import { Component} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)" class="btn btn-primary mx-2">+1</button>
    <button (click)="reset()" class="btn btn-danger mx-2">Reset</button>
    <button (click)="increaseBy(-1)" class="btn btn-primary mx-2">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

}

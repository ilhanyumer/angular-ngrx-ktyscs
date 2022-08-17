import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html'
})

export class MyCounterComponent {
  count$: Observable<number>

  constructor() {
    // things to do here
  }

  increment() {
    // other things
  }

  decrement() {
    // different things
  }

  reset() {
    // more things
  }
}

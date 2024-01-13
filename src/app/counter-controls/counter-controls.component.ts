import {Component, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {decrement, increment} from "../store/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  counterInput: number = 1;
  constructor(private store: Store<{counter: number}>) {
  }

  increment() {
    const incrementValue = this.counterInput > 0 ? this.counterInput : 1;
    this.store.dispatch(increment({value: incrementValue}));
  }

  decrement() {
    const decrementValue = this.counterInput > 0 ? this.counterInput : 1;
    this.store.dispatch(decrement({value: decrementValue}));
  }
}

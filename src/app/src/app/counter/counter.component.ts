import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from '../../../../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../../../states/counter/counter.selector';
import * as CounterActions from '../../../../states/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent  implements OnInit {

  $count:Observable<number>; 

  constructor(private store:Store<AppState>){
      this.$count = this.store.select(selectCount);
  }
  ngOnInit(): void {
   
  }

  incrementCount() {
    this.store.dispatch(CounterActions.increment())
  }

  decrementCount() {
    this.store.dispatch(CounterActions.decrement())
  }

  resetCount() {
    this.store.dispatch(CounterActions.reset())
  }
}

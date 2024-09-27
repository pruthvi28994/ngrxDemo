import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  count = signal(0)


  incrementCount() {
    this.count.update((num)=> num+1)
  }

  decrementCount() {
    this.count.update((num)=> num-1)
  }

  resetCount() {
    this.count.set(0)
  }
}

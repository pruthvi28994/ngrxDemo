import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './src/app/counter/counter.component';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { Store } from '@ngrx/store';
import { SignalComponent } from './src/app/signal/signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CounterComponent,AsyncPipe,SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularStateDemo';
  cartCount : Observable<number>;

  constructor(private store :Store<AppState>){
    this.cartCount = this.store.select(selectCount)
  }
}

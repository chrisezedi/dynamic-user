import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersState } from './store/store.types';
import { selectIsFetching } from './store/reducers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsersComponent,MatProgressBarModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'dynamic-user';

  data$ = combineLatest({
    isFetching:this.store.select(selectIsFetching)
  })

  constructor(private store:Store<UsersState>){}
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { usersActions } from '../../store/actions';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { selectUser } from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  data$ = combineLatest({
    user:this.store.select(selectUser),
  })
  constructor(private store:Store, private route:ActivatedRoute){}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        if (params["id"]) {
          this.getUser(params["id"])
        }
      })
  }

  getUser(id:number) {
    this.store.dispatch(usersActions.getUserDetail({id}))
  }
}

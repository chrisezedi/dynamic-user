import { Component, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../types/user';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { usersActions } from '../../store/actions';
import { combineLatest } from 'rxjs';
import { selectPagination, selectUsers } from '../../store/reducers';
import { UsersState } from '../../store/store.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatCardModule, MatPaginatorModule, CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(private store:Store<UsersState>) {}
  users = signal<User[] | null>(null);
  pagination = signal<{ length?: number; pageSize?: number,page:number }>({page:1});
  data$ = combineLatest({
    users:this.store.select(selectUsers),
    pagination:this.store.select(selectPagination)
  })
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(usersActions.getUsers({page:this.pagination().page}))
  }

  setPage($event:PageEvent){
    this.pagination.update(pagination => ({...pagination,page:$event.pageIndex+1}))
    this.getUsers()
  }
}

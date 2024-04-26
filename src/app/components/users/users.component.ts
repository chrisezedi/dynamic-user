import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../user.service';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../types/user';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatCardModule, MatPaginatorModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  users = signal<User[] | null>(null);
  pagination = signal<{ length?: number; pageSize?: number,page:number }>({page:1});

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers(this.pagination().page).subscribe({
      next: (res) => {
        console.log(res);
        this.users.set(res.data);
        this.pagination.set({ length: res.total, pageSize: res.per_page,page:res.page });
      },
      error: () => {
        // this.user.set(res.data)
      },
    });
  }

  setPage($event:PageEvent){
    this.pagination.update(pagination => ({...pagination,page:$event.pageIndex+1}))
    this.getUsers()
  }
}

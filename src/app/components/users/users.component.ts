import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../user.service';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../types/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  users = signal<User[] | null>(null);

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe({
      next:(res)=>{
        this.users.set(res.data)
      },
      error:()=>{
        // this.user.set(res.data)
      }
    });
  }
}

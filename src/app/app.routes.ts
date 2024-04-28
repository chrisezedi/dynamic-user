import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: '', redirectTo:'/users',pathMatch: 'full' },
  { path: 'users', component:UsersComponent},
  { path: 'users/:id', component:UserComponent},
  { path: '**', redirectTo: '/users'}
];

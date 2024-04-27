import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponsePayload } from './types/user';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  getUsers(page:number){
    const params = new HttpParams().set('page', page);
    return this.http.get<UserResponsePayload>(`${environment.apiUrl}/users`,{params});
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponsePayload } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "https://reqres.in/api";
  constructor(private http:HttpClient) { }

  getUsers(page:number){
    const params = new HttpParams().set('page', page);
    return this.http.get<UserResponsePayload>(`${this.baseUrl}/users`,{params});
  }
}

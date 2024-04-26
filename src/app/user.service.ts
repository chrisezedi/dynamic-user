import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponsePayload } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "https://reqres.in/api";
  constructor(private http:HttpClient) { }

  getUsers(){
    const params = new HttpParams().set('page', '1');
    return this.http.get<UserResponsePayload>(`${this.baseUrl}/users`,{params});
  }
}

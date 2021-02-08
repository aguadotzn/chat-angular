import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UsersService {
  private baseUrl = 'https://randomuser.me/api/';

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User> {
    return this.httpClient.get(`${this.baseUrl}?results=5`) as Observable<User>;
  }
}
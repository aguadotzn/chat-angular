import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Result } from 'src/app/shared/models/user.model';

@Injectable()
export class UsersService {
  private baseUrl = 'https://randomuser.me/api/';
  private results$ = new Subject<User>();

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(`${this.baseUrl}?results=10`)
      .subscribe((results) => {
        this.results$.next(results as User);
    });
  }

  public getUsers(users: number = 5): Observable<Result[]> {
    return this.results$.pipe(
      map((results) => {
        const resultCopy = {...results};
        resultCopy.results = resultCopy.results.slice(0, users);
        return resultCopy.results;
      })
    );
  }
}
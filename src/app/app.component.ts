import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from './shared/models/user.model';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public usersList: Result[]; // Array of users
  public actualRoute = '/';

  constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.url.subscribe(activeUrl => {
      this.actualRoute = window.location.pathname;
      console.log(activeUrl);
      console.log(this.actualRoute);
    });
  }

  public ngOnInit(): void {
    this._usersService.getUsers().subscribe((users) => this.usersList = users);
  }
}

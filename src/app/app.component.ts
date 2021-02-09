import { Component, OnInit } from '@angular/core';
import { Result } from './shared/models/user.model';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public usersList: Result[]; // Array of users

  constructor(private _usersService: UsersService){}

  public ngOnInit(): void {
    this._usersService.getUsers().subscribe((users) => this.usersList = users);
  }

  
}

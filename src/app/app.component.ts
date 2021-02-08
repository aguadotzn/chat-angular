import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public usersList: User; // Array of users

  constructor(private _usersService: UsersService){}

  public ngOnInit(): void {
    this._usersService.getUsers().subscribe((users) => this.usersList = users);
  }

  
}

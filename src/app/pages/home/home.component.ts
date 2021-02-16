import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'aag-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users = [];

  constructor(private _usersService: UsersService, private _router: Router) { }

  ngOnInit(): void {
    this._usersService.getUsers(5).subscribe((result) => {
      this.users = result;
    });
  }

  public selectUser(user): void {
    this._usersService.activeUser = user;
    this._router.navigate(['contact', user.name.first]);
  }

  public editUser(user): void {
    this._usersService.activeUser = user;
    this._router.navigate(['edit', user]);
  }
}

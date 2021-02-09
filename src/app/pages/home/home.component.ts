import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'aag-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users = [];

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getUsers(5).subscribe((result) => {
      this.users = result;
    });
  }
}

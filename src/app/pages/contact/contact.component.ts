import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'aag-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public messagesList: string[] = []; // Array of messages
  public name: string; // Name of the person you are talking to
  public user: Result;

  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UsersService) { 
    this.user = this._userService.activeUser;
    }

  ngOnInit(): void {
    this.name = this._activatedRoute.snapshot.params.user;
  }

  public updateMessage(message: string) {
    this.messagesList.push(message);
  }
}

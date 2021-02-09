import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'aag-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() public user: User;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {}

  talkTo(user: any) {
    this._router.navigate(['contact', user]); 
  }
}

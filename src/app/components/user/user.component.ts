import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/user.model';

@Component({
  selector: 'aag-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() public user: Result;

  constructor(private _router: Router) {
    
  }

  ngOnInit(): void {
    console.log(this.user.name.first);
  }

  talkTo(user: any) {
    this._router.navigate(['contact', user]);    
  }
}

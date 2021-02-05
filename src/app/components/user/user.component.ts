import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/user.model';

@Component({
  selector: 'aag-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() public user: Result;

}

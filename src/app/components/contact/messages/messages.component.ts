import { Component, Input } from '@angular/core';

@Component({
  selector: 'aag-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent{
  @Input() public messages: string[];
}

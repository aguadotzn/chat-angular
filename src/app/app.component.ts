import { Component } from '@angular/core';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public messagesList: string[] = []; // Array of messages

  public updateMessage(message: string) {
    this.messagesList.push(message);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aag-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent {

  @Input() public buttonLabel: string;
  @Output() public actionClicked = new EventEmitter();

  public message: string; // Message to send

  public buttonClicked() {
    this.actionClicked.emit(this.message);
    this.message = ''; // Empty input after send message
  }

}

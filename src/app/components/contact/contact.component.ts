import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aag-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public messagesList: string[] = []; // Array of messages
  public name: string; // Name of the person you are talking to
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params.user;
  }

  public updateMessage(message: string) {
    this.messagesList.push(message);
  }

}

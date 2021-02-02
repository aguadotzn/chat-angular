import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { TextButtonComponent } from './text-button/text-button.component';
import { MimimiPipe } from './pipes/mimimi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TextButtonComponent,
    MimimiPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

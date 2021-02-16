import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './pages/contact/messages/messages.component';
import { TextButtonComponent } from './pages/contact/text-button/text-button.component';
import { MimimiPipe } from './shared/pipes/mimimi/mimimi.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { UserComponent } from './shared/components/user/user.component';
import { UsersService } from './shared/services/users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewComponent } from './pages/new/new.component';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TextButtonComponent,
    MimimiPipe,
    HighlightDirective,
    UserComponent,
    HomeComponent,
    ContactComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';

const chatRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'edit/:id',
    component: NewComponent,
  },
  {
    path: 'contact/:user',
    component: ContactComponent,
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(chatRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

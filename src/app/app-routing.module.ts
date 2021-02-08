import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const chatRoutes: Routes = [{
  path: '',
  component: HomeComponent
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

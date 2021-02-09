import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

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

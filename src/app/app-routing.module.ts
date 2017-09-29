import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ThemesComponent } from './themes/themes.component';
import { BasicsComponent } from './basics/basics.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
//import { AuthGuard } from './auth.service';

const routes: Routes = [
  //canActivate: [AuthGuard]
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'useful-links',  component: UsefulLinksComponent },
  { path: 'themes',  component: ThemesComponent },
  { path: 'basics',  component: BasicsComponent },
  { path: '404',  component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

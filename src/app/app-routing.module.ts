import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent }
];
@NgModule({
   imports: [
     RouterModule.forRoot(routes, { useHash: true })
   ],
   exports: [RouterModule]
})
export class AppRoutingModule { }

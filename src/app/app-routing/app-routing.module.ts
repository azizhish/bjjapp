import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//The Components to which we will route to
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';
import { InputDataComponent } from "../input-data/input-data.component";
import { Graph1Component } from '../graph1/graph1.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'input/:id', component: InputDataComponent },
  { path: 'graph', component: Graph1Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

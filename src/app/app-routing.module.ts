import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { auditTime } from 'rxjs';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { AuthGuard } from './auth.guard';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'login', component: LoginComponent,},
  {
    path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard],
    children: [
       {path:'',component: CreatestudentComponent},
      { path: 'createstudent', component: CreatestudentComponent },
      { path: 'allstudents', component: AllstudentsComponent }]
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

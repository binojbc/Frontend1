import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagertaskComponent } from './managertask/managertask.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { MyformComponent } from './myform/myform.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { HomeComponent } from './home/home.component';
import { ManagerprofileComponent } from './managerprofile/managerprofile.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent,
  },
  {
    path:'addnew',
    component:MyformComponent,
  },
  {
    path:'viewadded',
    component:ViewDataComponent,
  },
  
  
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
 
  {
    path:'viewadded/edit/:id',
    component:ManageDataComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'task',
    component:TaskdetailsComponent
  },
  {
    path: 'app-managertask',
    component:ManagertaskComponent
  },
  {
    path: 'app-profile',
    component:ProfileComponent
  },
  {
    path: 'app-managerprofile',
    component:ManagerprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ManagertaskComponent } from './managertask/managertask.component';
import { AppManagerSideNavComponent } from './app-manager-side-nav/app-manager-side-nav.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SearchPipe } from './search.pipe';


import { MyformComponent } from './myform/myform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewDataComponent } from './view-data/view-data.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ManagerprofileComponent } from './managerprofile/managerprofile.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    AddtaskComponent,
    TaskdetailsComponent,
    DashboardComponent,
    SearchPipe,
    ManagertaskComponent,
    AppManagerSideNavComponent,
    ProfileComponent,
    MyformComponent,
    ViewDataComponent,
    ManageDataComponent,
    HomeComponent,
    ManagerprofileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TaskapiService } from '../services/taskapi.service';
@Component({
  selector: 'app-managerprofile',
  templateUrl: './managerprofile.component.html',
  styleUrls: ['./managerprofile.component.css']
})
export class ManagerprofileComponent implements OnInit {

  public UserList:any;
  constructor(private service:TaskapiService,
    public appComponenet:AppComponent) { }

  ngOnInit(): void {
    this.refreshUserList();
  }
  // get all data
  refreshUserList(){  
    this.service.getUserById(this.appComponenet.userId).subscribe((response)=>{
      this.UserList=response;
    })
  }

}
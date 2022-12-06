import { Component, Input, OnInit } from '@angular/core';
import { TaskapiService } from '../services/taskapi.service';

@Component({
  selector: 'app-app-manager-side-nav',
  templateUrl: './app-manager-side-nav.component.html',
  styleUrls: ['./app-manager-side-nav.component.css']
})
export class AppManagerSideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  constructor(private service:TaskapiService) { }

  ngOnInit(): void {
  }
  // logout
  logOut(){
    window.location.reload();
    // this.service.dashboardDisplay=true;
    // this.service.loginDisplay=false;
  }

}

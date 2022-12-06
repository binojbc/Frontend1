import { Component, Input, OnInit } from '@angular/core';
import { TaskapiService } from '../services/taskapi.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  constructor(public service: TaskapiService) { }

  ngOnInit(): void {
  }
  // logout
  logOut(){
    window.location.reload();
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menustatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  // side nav
  SideNavToggle(){
    this.menustatus = !this.menustatus;
    this.sideNavToggled.emit(this.menustatus);
  }
}

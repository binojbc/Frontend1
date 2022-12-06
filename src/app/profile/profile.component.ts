import { Component, OnInit } from '@angular/core';
import { TaskapiService } from '../services/taskapi.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  constructor(private service:TaskapiService,
    public appComponenet:AppComponent) { }
  
  title = 'frontends';

  UserLists: any = [];
  sideNavStatus: boolean = false;

  // login
  public details: any;
  public managerName: any;

  // failed
  public failed ="";

  // dashboardShow:boolean = false;
  // login:boolean = true;

  // sidenavs
  public managerSideNav = false;
  public userSideNav = false;

  // succes 
  public succesMessage ="";

  // userid
  public userId:any;



  ngOnInit(): void {

  }

  //login and dasgboard change
  public dashboardShow = this.service.dashboardDisplay;
  public login = this.service.loginDisplay;

  // login
  onSubmit(logins: any) {
    this.service.getAllUser().subscribe(data => {
      this.UserLists = data;
      // console.log(this.UserLists);
      // console.log(logins.value)
      // iterate each element in user model 
      for (let item in this.UserLists){
        // console.log("username",this.UserLists[item].UserName);
        // console.log("username",item.UserName);
        // check username and password
        if((this.UserLists[item].UserName == logins.value.userName) && (this.UserLists[item].Password == logins.value.password)){
          // console.log("Designation",this.UserLists[item].Designation)
          // designation is manger goes to manger dashboard
          this.userId=this.UserLists[item].UserId;
          if (this.UserLists[item].Designation == "Manager") {
            this.dashboardShow = true;
            this.login = false;
            // this.service.dashboardDisplay=false;
            // this.service.loginDisplay=false;
            this.managerSideNav = true;
            this.userSideNav = false;
            
            this.managerName = this.UserLists[item].UserName;
            // console.log(this.managerName);

          }
          // designation is user goes to user dashboard
          else if(this.UserLists[item].Designation == "User"){
            this.dashboardShow = true;
            this.login = false;
            this.managerSideNav = false;
            this.userSideNav = true;
           
          }
        }
        // failed message
        else {
          this.failed="Incorrect username or password.Try again..."
        }
      }
  
    });

  }
    // post
    onSubmitUser(forms: any ,form: any){
    
      const data = { 
      UserName:forms.UserName,
      FullName:forms.FullName,
     
      IsSuperUser: 'NO',
      Department: forms.Department,
      Designation: forms.Designation,
      Password:forms.Password};
      this.service.createUser(data).subscribe((response)=>{
        console.log("value in response",response);
        this.succesMessage = "Added SuccessFully"
        form.reset();
      })
      console.log(data);
    }
    // clear form
    cancel(tasksForms: any) {
      tasksForms.reset();
    }
  



}
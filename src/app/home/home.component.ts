import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private serv:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getMyData(); // load data while the component is loaded everytime.
  }
  employeeData_get:any;  // the variable that serves the data to the template.
  // service to get data from the server
  getMyData(){
    this.serv.getData('employee/').subscribe((data)=>{
      this.employeeData_get = data;
      //console.log(data);
    })
  }
  // service to delete the employee
  deleteTheData(id:any){
    this.serv.deleteData(`employee/${id}/`).subscribe(data=>{
      alert('employee deleted');
      // to refresh the component
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['viewadded']);
      });
    });
  }

}
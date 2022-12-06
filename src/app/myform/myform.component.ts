import { Component, OnInit } from '@angular/core';
import { ApiService } from'../apiservice.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})

export class MyformComponent implements OnInit {
  // a form for entering and validating data
    employeeForm = new FormGroup({
      UserName : new FormControl(),
      Email:new FormControl(),
      Department : new FormControl(),
      Designation: new FormControl(),
      EmergencyContact: new FormControl(),
      BloodGroup:new FormControl(),
      dob:new FormControl(),
      WorkLocation:new FormControl(),
      Address:new FormControl(),
      MaritalStatus:new FormControl(),
  });
  
  constructor(private serv:ApiService) { }
  
  ngOnInit(): void {
  }

  employeeData_post:any;  // variable that takes form data.
  // service for posting data to server
  postMyData(){
    if(this.validate_form()){
        this.employeeData_post = this.employeeForm.value; // assign form data to the variable
        this.serv.postData(`employee/`,this.employeeData_post).subscribe((data)=>{
          //console.log(this.productData_post);
          alert('employee Added');
        });
    }
    else{
      alert('Please fill form correctly');
    }
  }
  validate_form(){
    const formData = this.employeeForm.value;
    if(formData.UserName== null){
      return false;
   }else if(formData.Email == null){
      return false;
    }else if(formData.Department == null){
      return false;
    }else if(formData.Designation == null){
      return false;
    }else if(formData.EmergencyContact == null){
      return false;
    }else if(formData.BloodGroup == null){
      return false;
    }else if(formData.dob == null){
      return false;
    }else if(formData.WorkLocation== null){
      return false;
    }else if(formData.Address == null){
      return false;
    }else if(formData.MaritalStatus == null){
      return false;
    
    }else{
      return true;
    }
  }
}